import { registerSettings } from "./settings.js";
import { getSettingValue } from "./utility.js";

Hooks.on('init', () => {
    registerSettings();
})


// ============ FAST FORWARD ROLLS ============


// ABILITY CHECKS
Hooks.on('dnd5e.preRollAbilityTest', (actor, rollData, abilityId) => {
    if(rollData.vanilla){ return; }
    const event = window.event;
    const skipDialog = getSettingValue("skipAbilityDialogs");
    const altRoll = useAltRoll(event, skipDialog);
    const fastForward = skipDialog != altRoll;
    rollData.fastForward  = fastForward;
});

// SAVING THROWS
Hooks.on('dnd5e.preRollAbilitySave', (actor, rollData, abilityId) => {
    if(rollData.vanilla){ return; }
    const event = window.event;
    const skipDialog = getSettingValue("skipSaveDialogs");
    const altRoll = useAltRoll(event, skipDialog);
    const fastForward = skipDialog != altRoll;
    rollData.fastForward  = fastForward;
});

// DEATH SAVES
Hooks.on('dnd5e.preRollDeathSave', (actor, rollData) => {
    if(rollData.vanilla){ return; }
    const event = window.event;
    const skipDialog = getSettingValue("skipSaveDialogs");
    const altRoll = useAltRoll(event, skipDialog);
    const fastForward = skipDialog != altRoll;
    rollData.fastForward  = fastForward;
});

// SKILL CHECKS
Hooks.on('dnd5e.preRollSkill', (actor, rollData, skillId) => {
    if(rollData.vanilla){ return; }
    const event = window.event;
    const skipDialog = getSettingValue("skipSkillDialogs");
    const altRoll = useAltRoll(event, skipDialog);
    const fastForward = skipDialog != altRoll;
    rollData.fastForward  = fastForward;
});

// TOOL CHECKS
Hooks.on('dnd5e.preRollToolCheck', (actor, rollData, toolId) => {
    if(rollData.vanilla){ return; }
    const event = window.event;
    const skipDialog = getSettingValue("skipToolDialogs");
    const altRoll = useAltRoll(event, skipDialog);
    const fastForward = skipDialog != altRoll;
    rollData.fastForward  = fastForward;
});

// ATTACK ROLLS
Hooks.on('dnd5e.preRollAttackV2', (rollConfig, dialogConfig, messageConfig) =>{    
    const event = rollConfig.event;
    const skipDialog = getSettingValue("skipAttackDialogs");
    const altRoll = useAltRoll(event, skipDialog);
    const fastForward = skipDialog != altRoll;
    dialogConfig.configure = !fastForward;
});

// DAMAGE ROLLS
Hooks.on('dnd5e.preRollDamageV2', (rollConfig, dialogConfig, messageConfig) => {
    const event = rollConfig.event;
    const skipDialog = getSettingValue("skipDamageDialogs");
    const altRoll = useAltRoll(event, skipDialog);
    const fastForward = skipDialog != altRoll;
    dialogConfig.configure = !fastForward;
});


// ============ HANDLE AUTOMATIC ROLLS ============


// Auto Roll Damage (Attacks)
Hooks.on('dnd5e.rollAttackV2', async (rollConfig, dialogConfig, messageConfig) =>{    
    const autoRollDamage = getSettingValue('autoRollDamageForAttacks');
    if((dialogConfig.subject.damage) && autoRollDamage){
        // TODO: Fix crit handling, currently not possible, should be fixed in v4.2.x
        // Issue Ref: https://github.com/foundryvtt/dnd5e/issues/4571
        const isCrit = rollConfig[0].isCritical;
        await dialogConfig.subject.rollDamage({isCritical: isCrit});
    }
});

// ACTIVITY FOLLOW-UPS
Hooks.on('dnd5e.postUseActivity', (activity, config, results) => {

    // Auto Roll Attack Activities - OVERRIDES SYSTEM BEHAVIOR - BROKEN
    if(activity.type === "attack"){
        const autoRollAttacks = getSettingValue("autoRollAttacks");
        if (!autoRollAttacks) return false;
    }

    // Auto Roll Damage (Damage Activities) - OVERRIDES SYSTEM BEHAVIOR - BROKEN
    if(activity.type === "damage"){
        const autoRollDamage = getSettingValue('autoRollDamageForDamage');
        if (!autoRollDamage) return false;
    }

    // Auto Roll Damage (Save Activities)
    if(activity.type === "save"){
        const autoRollDamage = getSettingValue('autoRollDamageForSave');
        if(activity.damage && autoRollDamage){
            activity.rollDamage();
        }
    }

    // Auto Roll Healing (Healing Activities) - OVERRIDES SYSTEM BEHAVIOR
    if(activity.type === "heal"){
        const autoRollDamage = getSettingValue('autoRollDamageForHealing');
        if (!autoRollDamage) return false;
    }

    // Auto Roll Utility Activities
    if(activity.type === "utility"){
        const autoRoll = getSettingValue('autoRollUtility');
        if(autoRoll){
            activity.rollFormula();
        }
    }
});

// Adapted from from dnd5e d20-roll.mjs, version 4.0
function useAltRoll(ev, skipDialog = false){
    // We alt roll when...
    //  Adv/Disadv/FF Key is held and Skip Dialogs is off, or
    //  FF Key is not held and Skip Dialogs is on.
    let keys = {};
    if(skipDialog){
        keys = { normal: areKeysPressed(ev, "skipDialogNormal") };
    } else {
        keys = {
            normal: areKeysPressed(ev, "skipDialogNormal"),
            advantage: areKeysPressed(ev, "skipDialogAdvantage"),
            disadvantage: areKeysPressed(ev, "skipDialogDisadvantage")
        };
    }
    return Object.values(keys).some(k => k);
}

// Taken from dnd5e utils.mjs, version 4.0
function areKeysPressed(event, action) {
    if ( !event ) return false;
    const activeModifiers = {};
    const addModifiers = (key, pressed) => {
      activeModifiers[key] = pressed;
      KeyboardManager.MODIFIER_CODES[key].forEach(n => activeModifiers[n] = pressed);
    };
    addModifiers(KeyboardManager.MODIFIER_KEYS.CONTROL, event.ctrlKey || event.metaKey);
    addModifiers(KeyboardManager.MODIFIER_KEYS.SHIFT, event.shiftKey);
    addModifiers(KeyboardManager.MODIFIER_KEYS.ALT, event.altKey);
    return game.keybindings.get("dnd5e", action).some(b => {
      if ( game.keyboard.downKeys.has(b.key) && b.modifiers.every(m => activeModifiers[m]) ) return true;
      if ( b.modifiers.length ) return false;
      return activeModifiers[b.key];
    });
}

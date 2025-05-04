import { registerSettings } from "./settings.js";
import { getSettingValue } from "./utility.js";

Hooks.on('init', () => {
    registerSettings();
})


// ============ FAST FORWARD ROLLS ============


// ABILITY CHECKS
Hooks.on('dnd5e.preRollAbilityCheckV2', (rollConfig, dialogConfig, messageConfig) => {
    if(rollConfig.vanilla) return;
    const event = rollConfig.event;
    const skipDialog = getSettingValue("skipAbilityDialogs");
    const altRoll = useAltRoll(event, skipDialog);
    const fastForward = skipDialog != altRoll;
    dialogConfig.configure = !fastForward
});

// SAVING THROWS
Hooks.on('dnd5e.preRollSavingThrowV2', (rollConfig, dialogConfig, messageConfig) => {
    if(rollConfig.vanilla) return;
    const event = rollConfig.event;
    const skipDialog = getSettingValue("skipSaveDialogs");
    const altRoll = useAltRoll(event, skipDialog);
    const fastForward = skipDialog != altRoll;
    dialogConfig.configure = !fastForward
});

// DEATH SAVES
Hooks.on('dnd5e.preRollDeathSaveV2', (rollConfig, dialogConfig, messageConfig) => {
    if(rollConfig.vanilla) return;
    const event = rollConfig.event;
    const skipDialog = getSettingValue("skipSaveDialogs");
    const altRoll = useAltRoll(event, skipDialog);
    const fastForward = skipDialog != altRoll;
    dialogConfig.configure = !fastForward
});

// SKILL CHECKS
Hooks.on('dnd5e.preRollSkillV2', (rollConfig, dialogConfig, messageConfig) => {
    if(rollConfig.vanilla) return;
    const event = rollConfig.event;
    const skipDialog = getSettingValue("skipSkillDialogs");
    const altRoll = useAltRoll(event, skipDialog);
    const fastForward = skipDialog != altRoll;
    dialogConfig.configure = !fastForward
});

// TOOL CHECKS
Hooks.on('dnd5e.preRollToolV2', (rollConfig, dialogConfig, messageConfig) => {
    if(rollConfig.vanilla) return;
    const event = rollConfig.event;
    const skipDialog = getSettingValue("skipToolDialogs");
    const altRoll = useAltRoll(event, skipDialog);
    const fastForward = skipDialog != altRoll;
    dialogConfig.configure = !fastForward
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
        const isCrit = rollConfig[0].isCritical;
        await dialogConfig.subject.rollDamage({isCritical: isCrit});
    }
});

// ACTIVITY FOLLOW-UPS
Hooks.on('dnd5e.postUseActivity', (activity, config, results) => {

    // Auto Roll Attack Activities
    if(activity.type === "attack"){
        const autoRollAttacks = getSettingValue("autoRollAttacks");
        if (!autoRollAttacks) return false;
    }

    // Auto Roll Damage (Damage Activities)
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

// Adapted from dnd5e utils.mjs, version 4.0
function areKeysPressed(event, action) {
    if ( !event ) return false;
    const kbm = foundry.helpers.interaction.KeyboardManager;
    const activeModifiers = {};
    const addModifiers = (key, pressed) => {
      activeModifiers[key] = pressed;
      kbm.MODIFIER_CODES[key].forEach(n => activeModifiers[n] = pressed);
    };
    addModifiers(kbm.MODIFIER_KEYS.CONTROL, event.ctrlKey || event.metaKey);
    addModifiers(kbm.MODIFIER_KEYS.SHIFT, event.shiftKey);
    addModifiers(kbm.MODIFIER_KEYS.ALT, event.altKey);
    return game.keybindings.get("dnd5e", action).some(b => {
      if ( game.keyboard.downKeys.has(b.key) && b.modifiers.every(m => activeModifiers[m]) ) return true;
      if ( b.modifiers.length ) return false;
      return activeModifiers[b.key];
    });
}
import { registerSettings } from "./settings.js";
import { getSettingValue } from "./utility.js";

Hooks.on('init', () => {
    registerSettings();
})

// A place to store relevant event data; it's a PointerEvent in PreUseItem,
//  and we need it carried through to UseItem, so we store it here then
//  nuke it in UseItem.
let STORED_EVENT = {
    altKey: false,
    shiftKey: false,
    ctrlKey: false
};

// ABILITY CHECKS
Hooks.on('dnd5e.preRollAbilityTest', (document, config) => {
    if(config.vanilla){ return; }
    if(config.fastForward === true || config.fastForward === false){
        return;
    }
    const advantage = useAdvantage(window.event);
    const disadvantage = useDisadvantage(window.event);
    const fastForward = getSettingValue("skipAbilityDialogs") || useFastForward(window.event) || advantage || disadvantage;

    config.fastForward = fastForward;
    config.advantage = advantage;
    config.disadvantage = disadvantage;
});

// SAVING THROWS
Hooks.on('dnd5e.preRollAbilitySave', (document, config) => {
    if(config.vanilla){ return; }
    if(config.fastForward === true || config.fastForward === false){
        return;
    }
    const advantage = useAdvantage(window.event);
    const disadvantage = useDisadvantage(window.event);
    const fastForward = getSettingValue("skipSaveDialogs") || useFastForward(window.event) || advantage || disadvantage;

    config.fastForward = fastForward;
    config.advantage = advantage;
    config.disadvantage = disadvantage;
});

// DEATH SAVES
Hooks.on('dnd5e.preRollDeathSave', (document, config) => {
    if(config.vanilla){ return; }
    if(config.fastForward === true || config.fastForward === false){
        return;
    }
    const advantage = useAdvantage(window.event);
    const disadvantage = useDisadvantage(window.event);
    const fastForward = getSettingValue("skipSaveDialogs") ||useFastForward(window.event) || advantage || disadvantage;

    config.fastForward = fastForward;
    config.advantage = advantage;
    config.disadvantage = disadvantage;
});

// SKILL CHECKS
Hooks.on('dnd5e.preRollSkill', (document, config) => {
    if(config.vanilla){ return; }
    if(config.fastForward === true || config.fastForward === false){
        return;
    }
    const advantage = useAdvantage(window.event);
    const disadvantage = useDisadvantage(window.event);
    const fastForward = getSettingValue("skipSkillDialogs") ||useFastForward(window.event) || advantage || disadvantage;

    config.fastForward = fastForward;
    config.advantage = advantage;
    config.disadvantage = disadvantage;
});

// ATTACKS
Hooks.on('dnd5e.preRollAttack', (document, config) => {
    if(config.vanilla){ return; }
    if(config.fastForward === true || config.fastForward === false){
        return;
    }
    const advantage = useAdvantage(window.event);
    const disadvantage = useDisadvantage(window.event);
    const fastForward = getSettingValue("skipItemDialogs") || useFastForward(window.event) || advantage || disadvantage;

    config.fastForward = fastForward;
    config.advantage = advantage;
    config.disadvantage = disadvantage;
});

// TOOLS
Hooks.on('dnd5e.preRollToolCheck', (document, config) => {
    if(config.vanilla){ return; }
    if(config.fastForward === true || config.fastForward === false){
        return;
    }
    const advantage = useAdvantage(window.event);
    const disadvantage = useDisadvantage(window.event);
    const fastForward = getSettingValue("skipItemDialogs") ||useFastForward(window.event) || advantage || disadvantage;

    config.fastForward = fastForward;
    config.advantage = advantage;
    config.disadvantage = disadvantage;
});

// DAMAGE
Hooks.on('dnd5e.preRollDamage', (document, config) => {
    if(config.vanilla){ return; }
    if(config.fastForward === true || config.fastForward === false){
        return;
    }
    const critical = useAdvantage(window.event);
    const fastForward = getSettingValue("skipDamageDialogs") ||useFastForward(window.event) || critical;

    config.fastForward = fastForward;
    config.critical = critical;
});

// ITEMS
Hooks.on('dnd5e.preUseItem', async () => {
    const ev = window.event;
    STORED_EVENT = {
        altKey: ev.altKey,
        shiftKey: ev.shiftKey,
        ctrlKey: ev.ctrlKey
    };
});

Hooks.on('dnd5e.useItem', async (item) => {
    const ev = foundry.utils.deepClone(STORED_EVENT);
    STORED_EVENT = {
        altKey: false,
        shiftKey: false,
        ctrlKey: false,
    };
    const advantage = useAdvantage(ev);
    const disadvantage = useDisadvantage(ev);
    const fastForward = getSettingValue("skipItemDialogs") || useFastForward(ev) || advantage || disadvantage;

    const autoRollItem = getSettingValue("autoRollItem");
    const autoRollDamage = getSettingValue("autoRollDamage");
    
    if (!autoRollItem && !autoRollDamage) {
        return;
    }

    let crit = false;

    // Roll the item if needed
    if(autoRollItem){
        if (item.type === 'tool') {
            return item.rollToolCheck({
                advantage: advantage,
                disadvantage: disadvantage,
                fastForward: fastForward
            });
        }

        if (item.hasAttack) {
            const result = await item.rollAttack({
                advantage: advantage,
                disadvantage: disadvantage,
                fastForward: fastForward
            });
  
            if (!result) {
                return;
            }
  
            if (result.isCritical) {
                crit = true;
            }
        }

        if (autoRollDamage && item.hasDamage) {
            item.rollDamage({critical: crit});
        }
    }

});

function useAdvantage(ev){
    if(getSettingValue("useBRShortcutKeys")){
        return ev.shiftKey;
    }
    return ev.altKey;
}

function useDisadvantage(ev){
    return ev.ctrlKey;
}

function useFastForward(ev){
    if(getSettingValue("useBRShortcutKeys")){
        return ev.altKey;
    }
    return ev.shiftKey;
}
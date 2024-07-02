export const MODULE_ID = 'crash-rolls-5e';

export function registerSettings() {
    game.settings.register(MODULE_ID, 'autoRollItem', {
        name: "Automatically Roll Items",
        hint: "Automatically roll tool checks and attack rolls when an item is used.",
        scope: 'client',
        default: false,
        type: Boolean,
        config: true
    });

    game.settings.register(MODULE_ID, 'skipItemDialogs', {
        name: "Skip Item Dialogs",
        hint: "Skip the advantage/disadvantage dialog when rolling tool checks and attack rolls from items",
        scope: 'client',
        default: false,
        type: Boolean,
        config: true
    });

    game.settings.register(MODULE_ID, 'autoRollDamage', {
        name: "Automatically Roll Damage",
        hint: "Automatically make damage rolls when using items or spells.",
        scope: 'client',
        default: false,
        type: Boolean,
        config: true
    });
    
    game.settings.register(MODULE_ID, 'skipDamageDialogs', {
        name: "Skip Damage Dialogs",
        hint: "Skip the crit/bonus dialog when rolling damage",
        scope: 'client',
        default: false,
        type: Boolean,
        config: true
    });

    game.settings.register(MODULE_ID, 'skipAbilityDialogs', {
        name: "Skip Ability Check Dialogs",
        hint: "Skip the advantage/disadvantage dialog when rolling ability checks.",
        scope: 'client',
        default: false,
        type: Boolean,
        config: true
    });

    game.settings.register(MODULE_ID, 'skipSaveDialogs', {
        name: "Skip Save Dialogs",
        hint: "Skip the advantage/disadvantage dialog when rolling saving throws.",
        scope: 'client',
        default: false,
        type: Boolean,
        config: true
    });

    game.settings.register(MODULE_ID, 'skipSkillDialogs', {
        name: "Skip Skill Check Dialogs",
        hint: "Skip the advantage/disadvantage dialog when rolling skill checks.",
        scope: 'client',
        default: false,
        type: Boolean,
        config: true
    });
}
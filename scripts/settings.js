export const MODULE_ID = 'crash-rolls-5e';

export function registerSettings() {

    game.settings.register(MODULE_ID, 'autoRollAttacks', {
        name: "Auto Roll Attacks",
        hint: "Automatically make attack rolls when attack-type actions are used.",
        scope: 'client',
        default: false,
        type: Boolean,
        config: true
    });

    game.settings.register(MODULE_ID, 'autoRollDamageForAttacks', {
        name: "Auto Roll Attack Damage",
        hint: "Automatically make damage rolls when attack-type actions are used.",
        scope: 'client',
        default: false,
        type: Boolean,
        config: true
    });

    game.settings.register(MODULE_ID, 'autoRollDamage', {
        name: "Auto Roll Other Damage and Healing",
        hint: "Automatically make damage and healing rolls when non-attack-type actions are used.",
        scope: 'client',
        default: false,
        type: Boolean,
        config: true
    });

    game.settings.register(MODULE_ID, 'autoRollUtility', {
        name: "Auto Roll Other Formulae",
        hint: "Automatically make rolls when using utility-type actions.",
        scope: 'client',
        default: false,
        type: Boolean,
        config: true
    });

    game.settings.register(MODULE_ID, 'skipAttackDialogs', {
        name: "Skip Attack Dialogs",
        hint: "Skip the advantage/disadvantage dialog when making attack rolls by default. When this is enabled, holding the 'Skip Dialog' hotkey will instead display the dialog.",
        scope: 'client',
        default: false,
        type: Boolean,
        config: true
    });
    
    game.settings.register(MODULE_ID, 'skipDamageDialogs', {
        name: "Skip Damage Dialogs",
        hint: "Skip the crit/bonus dialog when rolling damage by default. When this is enabled, holding the 'Skip Dialog' hotkey will instead display the dialog.",
        scope: 'client',
        default: false,
        type: Boolean,
        config: true
    });

    game.settings.register(MODULE_ID, 'skipAbilityDialogs', {
        name: "Skip Ability Check Dialogs",
        hint: "Skip the advantage/disadvantage dialog when rolling ability checks by default. When this is enabled, holding the 'Skip Dialog' hotkey will instead display the dialog.",
        scope: 'client',
        default: false,
        type: Boolean,
        config: true
    });

    game.settings.register(MODULE_ID, 'skipSaveDialogs', {
        name: "Skip Save Dialogs",
        hint: "Skip the advantage/disadvantage dialog when rolling saving throws by default. When this is enabled, holding the 'Skip Dialog' hotkey will instead display the dialog.",
        scope: 'client',
        default: false,
        type: Boolean,
        config: true
    });

    game.settings.register(MODULE_ID, 'skipSkillDialogs', {
        name: "Skip Skill Check Dialogs",
        hint: "Skip the advantage/disadvantage dialog when rolling skill checks by default. When this is enabled, holding the 'Skip Dialog' hotkey will instead display the dialog.",
        scope: 'client',
        default: false,
        type: Boolean,
        config: true
    });

    game.settings.register(MODULE_ID, 'skipToolDialogs', {
        name: "Skip Tool Dialogs",
        hint: "Skip the advantage/disadvantage dialog when rolling tool checks by default. When this is enabled, holding the 'Skip Dialog' hotkey will instead display the dialog.",
        scope: 'client',
        default: false,
        type: Boolean,
        config: true
    });
}
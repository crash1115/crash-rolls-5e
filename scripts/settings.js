export const MODULE_ID = 'crash-rolls-5e';

export function registerSettings() {

    game.settings.register(MODULE_ID, 'autoRollAttacks', {
        name: "Auto Roll Attack Activities",
        hint: "Automatically make attack rolls when Attack activities are used. The system does this by default; your selection here will override that behavior.",
        scope: 'client',
        default: true,
        type: Boolean,
        config: true
    });

    game.settings.register(MODULE_ID, 'autoRollDamageForAttacks', {
        name: "Auto Roll Damage (Attack Activities)",
        hint: "Automatically make damage rolls when Attack activities are used.",
        scope: 'client',
        default: false,
        type: Boolean,
        config: true
    });

    game.settings.register(MODULE_ID, 'autoRollDamageForDamage', {
        name: "Auto Roll Damage (Damage Activities)",
        hint: "Automatically make damage rolls when Damage activities are used. The system does this by default; your selection here will override that behavior.",
        scope: 'client',
        default: true,
        type: Boolean,
        config: true
    });

    game.settings.register(MODULE_ID, 'autoRollDamageForSave', {
        name: "Auto Roll Damage (Save Activities)",
        hint: "Automatically make damage rolls when Save activities are used.",
        scope: 'client',
        default: false,
        type: Boolean,
        config: true
    });

    game.settings.register(MODULE_ID, 'autoRollDamageForHealing', {
        name: "Auto Roll Healing (Healing Activities)",
        hint: "Automatically make healing rolls when Healing activities are used. The system does this by default; your selection here will override that behavior.",
        scope: 'client',
        default: true,
        type: Boolean,
        config: true
    });
    

    game.settings.register(MODULE_ID, 'autoRollUtility', {
        name: "Auto Roll Use Activities",
        hint: "Automatically make rolls when using Use-type actions.",
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
        hint: "Skip the advantage/disadvantage dialog when rolling saving throws (including death saves) by default. When this is enabled, holding the 'Skip Dialog' hotkey will instead display the dialog.",
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
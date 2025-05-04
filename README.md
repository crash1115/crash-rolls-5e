![GitHub Downloads (all assets, latest release)](https://img.shields.io/github/downloads/crash1115/crash-rolls-5e/latest/total?style=flat-square)

# 5e Quicker Rolls
A module for Foundry VTT that gives you more fine control over what the roll flow looks like for different types of rolls and item activities, without the need for a huge complex module that messes with a ton of things. Each user has the ability to adjust the settings for themselves.

## Automatic Roll Settings
Automatically roll specific types of rolls based on user preference. Auto rolls respect user preference for skipping or not skipping the appropriate roll dialogs (see next section for more info).
- Auto Roll Attack Activities
- Auto Roll Damage (Attack Activities)
- Auto Roll Damage (Damage Activities)
- Auto Roll Damage (Save Activities)
- Auto Roll Healing (Healing Activities)
- Auto Roll Use Activities

## Skip Dialog Settings
Set whether or not you want to skip dialogs for specific types of rolls by default.
- Skip Attack Dialogs
- Skip Damage Dialogs
- Skip Ability Check Dialogs
- Skip Saving Throw Dialogs
- Skip Skill Check Dialogs
- Skip Tool Check Dialogs

These settings can be overriden on a roll by roll basis if you have hotkeys set up through the system's Configure Controls menu:
- Holding `Skip Dialog (roll with Advantage/Critical)` will always skip the dialog and roll appropriately
- Holding `Skip Dialog (roll with Disdvantage)` will always skip the dialog and roll appropriately
- Holding `Skip Dialog` will skip the dialog when the below settings are off, and show it when the below settings are on (basically just inverts the set behavior)

## Compatibility
This module makes an attempt to be as non-disruptive as possible, but it has not been tested with other modules for compatibility. Check the table below for dnd5e system compatibility information.

| System Version     | Latest Module Version                                                       |
| ------------------ | --------------------------------------------------------------------------- |
| v5.x.x             | Untested Compatibility    |
| v4.4.x             | [v0.4.0](https://github.com/crash1115/crash-rolls-5e/releases/tag/0.4.0)    |
| v4.3.x             | [v0.3.0](https://github.com/crash1115/crash-rolls-5e/releases/tag/v0.3.0)   |
| v4.2.x             | [v0.3.0](https://github.com/crash1115/crash-rolls-5e/releases/tag/v0.3.0)   |
| v4.1.2             | [v0.3.0](https://github.com/crash1115/crash-rolls-5e/releases/tag/v0.3.0)   |
| v4.0.x             | [v0.2.2](https://github.com/crash1115/crash-rolls-5e/releases/tag/v0.2.2)   |

## Installation
- Manifest URL: `https://github.com/crash1115/crash-rolls-5e/releases/latest/download/module.json`

## Credits
- This module is derived in part from the [Faster Rolling by Default DnD5e](https://github.com/ElfFriend-DnD/foundryvtt-faster-rolling-by-default-5e) module.
- This module re-uses some code from the [dnd5e](https://github.com/foundryvtt/dnd5e) system.

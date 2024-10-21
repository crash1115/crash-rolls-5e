# What is this?
A module for Foundry VTT that gives you more fine control over what the roll flow looks like, without the need for a huge complex module that messes with a ton of things. Each user has the ability to adjust the settings for themselves.

# Compatibility
This module makes an attempt to be as non-disruptive as possible, but it has not been tested with other modules for compatibility.

# Automatic Roll Settings
Automatically roll specific types of rolls based on user preference. Auto rolls respect user preference for skipping or not skipping the appropriate roll dialogs (see next section for more info). All examples listed assume the items are using their default setups from the SRD compendium.

### Auto Roll Attacks
- When this is enabled, making an attack roll will automatically make the associated attack roll.
- Ex: Longsword, Eldritch Blast, Scorching Ray

### Auto Roll Attack Damage
- When this is enabled, making an attack roll will automatically make the associated damage roll once it is complete.
- Ex: Longsword, Eldritch Blast, Scorching Ray

### Auto Roll Other Damage and Healing
- When this is enabled, any damage or healing from activities that don't have the Attack type will roll automatically on use.
- Ex: Sneak Attack, Fireball, Potion of Healing, Cure Wounds

### Auto Roll OTher Formulae
- When this is enabled, any rolls from Utility type activities will roll automatically on use.
- Ex:

# Skip Dialog Settings
Skip or show dialogs for specific types of rolls. These settings can be overriden on a roll by roll basis if you have hotkeys set up through the system's Configure Controls menu:
- Holding `Skip Dialog (roll with Advantage/Critical)` will always skip the dialog and roll appropriately
- Holding `Skip Dialog (roll with Disdvantage)` will always skip the dialog and roll appropriately
- Holding `Skip Dialog` will skip the dialog when the below settings are off, and show it when the below settings are on

### Skip Attack Dialogs
- Skips the advantage/disadvantage/bonus dialog when rolling attacks.
- Ex: Longsword, Eldritch Blast, Scorching Ray

### Skip Damage Dialogs
- Skips the damage configuration dialog when rolling damage.
- Ex: Longsword, Sneak Attack, Fireball

### Skip Ability Check Dialogs
- Skips the advantage/disadvantage dialog when making skill checks, either from a character sheet or buttons in chat cards.
- Ex: Intelligence Check 
 
### Skip Saving Throw Dialogs
- Skips the advantage/disadvantage dialog when making skill checks, either from a character sheet or buttons in chat cards.
- Ex: Dexterity Saving Throw, Death Saving Throw

### Skip Skill Check Dialogs
- Skips the advantage/disadvantage dialog when making skill checks, either from a character sheet or buttons in chat cards.
- Ex: Athletics Check

### Skip Tool CHeck Dialogs
- Skips the advantage/disadvantage/ability score dialog when using tools. This applies when rolling the tool from the Details page of the character sheet, or clicking the buttons in chat chards, but not clicking on tool items in the inventory.
- Land Vehicles, Lute

# Credits
- This module is derived in part from the [Faster Rolling by Default DnD5e](https://github.com/ElfFriend-DnD/foundryvtt-faster-rolling-by-default-5e) module.
- This module re-uses some code from the [dnd5e](https://github.com/foundryvtt/dnd5e) system.

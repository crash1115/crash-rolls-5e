import { MODULE_ID } from "./settings.js";

export function getSettingValue(settingName){
    const val = game.settings.get(MODULE_ID, settingName);
    return val;
}
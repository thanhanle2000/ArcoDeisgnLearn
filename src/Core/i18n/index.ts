import en from "./Locales/en.json";
import vi from "./Locales/vi.json";

// TRANSLATE
export const translate = (key: string, language: string): string => {
    let langData: { [key: string]: string } = {};

    if (language === "en-US") langData = en;
    else if (language === "vi-VN") langData = vi;

    return langData[key] ? langData[key] : key;
};

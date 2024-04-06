import en from "./Locales/en.json";
import vi from "./Locales/vi.json";

// TRANSLATE
type LangData = {
    [key: string]: string | LangData;
};

export const translate = (keyPath: string, language: string): string => {
    let langData: LangData = {};

    if (language === "en-US") langData = en as LangData;
    else if (language === "vi-VN") langData = vi as LangData;

    const keys = keyPath.split(".");
    const translation = keys.reduce((prev, curr) => {
        return prev && typeof prev === "object" && curr in prev
            ? prev[curr]
            : null;
    }, langData as any);

    return typeof translation === "string" ? translation : keyPath;
};

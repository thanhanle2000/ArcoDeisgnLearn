import enUS from "@arco-design/web-react/es/locale/en-US";
import viVN from "@arco-design/web-react/es/locale/vi-VN";
import { Locale } from "@arco-design/web-react/es/locale/interface";

export function GetLocale(locale: string): Locale {
    switch (locale) {
        case "vi-VN":
            return viVN;
        case "en-US":
            return enUS;
        default:
            return enUS;
    }
}

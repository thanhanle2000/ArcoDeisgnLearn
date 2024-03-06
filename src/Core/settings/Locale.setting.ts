import zhCN from "@arco-design/web-react/es/locale/zh-CN";
import enUS from "@arco-design/web-react/es/locale/en-US";
import jaJP from "@arco-design/web-react/es/locale/ja-JP";
import koKR from "@arco-design/web-react/es/locale/ko-KR";
import idID from "@arco-design/web-react/es/locale/id-ID";
import thTH from "@arco-design/web-react/es/locale/th-TH";
import zhHK from "@arco-design/web-react/es/locale/zh-HK";
import frFR from "@arco-design/web-react/es/locale/fr-FR";
import esES from "@arco-design/web-react/es/locale/es-ES";
import deDE from "@arco-design/web-react/es/locale/de-DE";
import itIT from "@arco-design/web-react/es/locale/it-IT";
import viVN from "@arco-design/web-react/es/locale/vi-VN";
import { Locale } from "@arco-design/web-react/es/locale/interface";

export function GetLocale(locale: string): Locale {
    switch (locale) {
        case "zh-CN":
            return zhCN;

        case "en-US":
            return enUS;

        case "ja-JP":
            return jaJP;

        case "ko-KR":
            return koKR;

        case "id-ID":
            return idID;

        case "th-TH":
            return thTH;

        case "zh-HK":
            return zhHK;

        case "fr-FR":
            return frFR;

        case "es-ES":
            return esES;

        case "de-DE":
            return deDE;

        case "it-IT":
            return itIT;

        case "vi-VN":
            return viVN;

        default:
            return zhCN;
    }
}

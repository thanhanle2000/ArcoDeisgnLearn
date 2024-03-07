import zhCN from "@arco-design/web-react/es/locale/zh-CN";
import enUS from "@arco-design/web-react/es/locale/en-US";
import { Locale } from "@arco-design/web-react/es/locale/interface";

export function GetLocale(locale: string): Locale {
  switch (locale) {
    case "zh-CN":
      return zhCN;
    case "en-US":
      return enUS;
    default:
      return zhCN;
  }
}

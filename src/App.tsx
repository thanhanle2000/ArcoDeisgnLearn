import { ConfigProvider } from "@arco-design/web-react";
import { useAppSelector } from "./Data/DataSource/Api/LocalDB/reduxHooks";
import { GetLocale } from "src/Core";
import { useLayoutEffect } from "react";
import AppRouter from "./AppRouter";

function App() {
    const locale = useAppSelector((state) => state.common.locale);
    const isDark = useAppSelector((state) => state.common.isDarkTheme);

    useLayoutEffect(() => {
        if (isDark) {
            document.body.setAttribute("arco-theme", "dark");
        } else {
            document.body.removeAttribute("arco-theme");
        }
    }, [isDark]);

    return (
        <ConfigProvider locale={GetLocale(locale)}>
            <AppRouter />
        </ConfigProvider>
    );
}

export default App;

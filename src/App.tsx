import { useLayoutEffect } from "react";
import { ConfigProvider } from "@arco-design/web-react";

import { useAppSelector } from "./Data/DataSource/Api/LocalDB/reduxHooks";
import { GetLocale } from "src/Core";
import AppRouter from "./AppRouter";
import { AppProvider } from "./Core/Hooks/appContext";

function App() {
    // LOCALE
    const locale = useAppSelector((state) => state?.common?.locale); // => Nên đặt thêm "?" vào để tránh trình trạng khi có erro bung màn hình trắng

    // CHECK DARK / LIGHT
    const isDark = useAppSelector((state) => state?.common?.isDarkTheme);

    useLayoutEffect(() => {
        if (isDark) document?.body?.setAttribute("arco-theme", "dark");
        else document?.body?.removeAttribute("arco-theme");
    }, [isDark]);

    return (
        <AppProvider>
            <ConfigProvider locale={GetLocale(locale)}>
                <AppRouter />
            </ConfigProvider>
        </AppProvider>
    );
}

export default App;

import { useEffect, useMemo } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { HeaderRightSideItemInterface, ROUTES } from "src/Core";
import HeaderLayoutComponent from "src/Presentation/Layout/Header";
import LocaleButton from "src/Presentation/Layout/Header/Components/LocaleButton";
import DarkModeButton from "src/Presentation/Layout/Header/Components/DarkModeButton";
import { useAppSelector } from "src/Data/DataSource/Api/LocalDB/reduxHooks";

function LoginContainer() {
    // USER
    const user = useAppSelector((state) => state?.auth?.user);

    // HEADER ITEMS
    const headerItems: HeaderRightSideItemInterface[] = useMemo(
        () => [
            {
                key: "locale-button-header",
                content: <LocaleButton />,
            },

            {
                key: "darkMode-button-header",
                content: <DarkModeButton />,
            },
        ],
        []
    );

    // NAVIGATE
    const navigate = useNavigate();

    // USEEFFECT
    useEffect(() => {
        if (user?.isLoggedIn) {
            navigate(ROUTES.DASHBOARD);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="bg-[color:var(--color-primary-light-2)] min-h-[100vh] flex flex-col">
            <div className="h-[60px]">
                <HeaderLayoutComponent items={headerItems} />
            </div>
            <div className="flex-1 flex flex-row justify-center items-center">
                <Outlet />
            </div>
        </div>
    );
}

export default LoginContainer;

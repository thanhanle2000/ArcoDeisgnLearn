import { useEffect, useMemo } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { HeaderRightSideItemInterface } from "src/Core";
import HeaderLayoutComponent from "src/Presentation/Layout/Header";
import LocaleButton from "src/Presentation/Layout/Header/Components/LocaleButton";
import DarkModeButton from "src/Presentation/Layout/Header/Components/DarkModeButton";
import useViewModel from "./LoginContainerViewModel";
function LoginContainer() {
    // FROM VIEWMODEL
    const { handleGetUser } = useViewModel();

    // HEADER ITEMS
    const headerItems: HeaderRightSideItemInterface[] = useMemo(
        () => [
            {
                key: "localeButtonHeader",
                content: <LocaleButton />,
            },

            {
                key: "darkModeButtonHeader",
                content: <DarkModeButton />,
            },
        ],
        []
    );

    // NAVIGATE
    const navigate = useNavigate();

    // USE EFFECT
    useEffect(() => {
        (async () => {
            const userGot = await handleGetUser();
            console.log(userGot);

            if (userGot?.username) {
                navigate("/dashboard/workplace");
            }
        })();
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

import { Button, Tooltip } from "@arco-design/web-react";
import { IconSun, IconMoon } from "@arco-design/web-react/icon";
import { translate } from "src/Core";
import { changeThemeDark } from "src/Data/DataSource/Api/LocalDB/Slices/CommonSlice";

import {
    useAppDispatch,
    useAppSelector,
} from "src/Data/DataSource/Api/LocalDB/reduxHooks";

function DarkModeButton() {
    // REDUX
    const dispatch = useAppDispatch();

    // CHECK DARK / LIGHT
    const isDark = useAppSelector((state) => state?.common?.isDarkTheme);

    // LOCALE
    const locale = useAppSelector((state) => state?.common?.locale);

    return (
        <Tooltip
            content={translate(isDark ? "darkModeButtonTooltip" : "lightModeButtonTooltip", locale)}
        >
            <Button
                shape="round"
                type="default"
                icon={isDark ? <IconMoon /> : <IconSun />}
                onClick={() => dispatch(changeThemeDark(!isDark))}
            />
        </Tooltip>
    );
}

export default DarkModeButton;

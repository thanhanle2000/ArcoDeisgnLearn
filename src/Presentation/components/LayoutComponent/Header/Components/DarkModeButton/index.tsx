import { Button, Tooltip } from "@arco-design/web-react";
import { IconSun, IconMoon } from "@arco-design/web-react/icon";
import { changeThemeDark } from "src/Data/DataSource/Api/LocalDB/Slices/CommonSlice";

import {
    useAppDispatch,
    useAppSelector,
} from "src/Data/DataSource/Api/LocalDB/reduxHooks";

function DarkModeButton() {
    const dispatch = useAppDispatch();
    const isDark = useAppSelector((state) => state.common.isDarkTheme);

    return (
        <Tooltip
            content={
                isDark ? "Click to use Light mode" : "Click to use Dark mode"
            }
        >
            <Button
                shape="round"
                type="default"
                icon={isDark ? <IconMoon /> : <IconSun />}
                onClick={() => {
                    dispatch(changeThemeDark(!isDark));
                }}
            />
        </Tooltip>
    );
}

export default DarkModeButton;

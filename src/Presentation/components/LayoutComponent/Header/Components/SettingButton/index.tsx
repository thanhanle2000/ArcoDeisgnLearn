import { Button } from "@arco-design/web-react";
import { IconSettings } from "@arco-design/web-react/icon";
import SettingDrawer from "./SettingDrawer/SettingDrawer";
import { useState } from "react";

function SettingButton() {
    const [isVisible, setIsVisible] = useState(false);

    const handleSetVisible = (isVisible: boolean) => {
        setIsVisible(isVisible);
    };
    return (
        <>
            <Button
                shape="round"
                type="default"
                icon={<IconSettings />}
                onClick={() => handleSetVisible(true)}
            />
            <SettingDrawer
                isVisible={isVisible}
                handleSetVisible={handleSetVisible}
            />
        </>
    );
}

export default SettingButton;

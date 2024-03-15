import { IconSettings } from "@arco-design/web-react/icon";

import DrawerComponent from "./index";

interface Props {
    isVisible: boolean;
    handleSetVisible: (isVsb: boolean) => void;
}
function SettingDrawer({ isVisible = false, handleSetVisible }: Props) {
    return (
        <DrawerComponent
            title={
                <div className="flex flex-row justify-start items-center">
                    <IconSettings />
                    <span>Settings</span>
                </div>
            }
            visible={isVisible}
            handleSetVisible={handleSetVisible}
        />
    );
}

export default SettingDrawer;

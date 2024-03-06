import { IconSettings } from "@arco-design/web-react/icon";
import DrawerComponent from "src/Presentation/components/Drawer";

function SettingDrawer({
    isVisible,
    handleSetVisible,
}: {
    isVisible: boolean;
    handleSetVisible: (isVsb: boolean) => void;
}) {
    const title = (
        <div className="flex flex-row justify-start items-center">
            <IconSettings className="" />
            <span>Settings</span>
        </div>
    );
    return (
        <DrawerComponent
            title={title}
            visible={isVisible}
            handleSetVisible={handleSetVisible}
        />
    );
}

export default SettingDrawer;

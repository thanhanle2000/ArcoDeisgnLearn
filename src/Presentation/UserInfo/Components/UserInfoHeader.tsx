import { Avatar } from "@arco-design/web-react";
import {
    IconCamera,
    IconHome,
    IconLocation,
    IconUser,
} from "@arco-design/web-react/icon";

import tailwindConfig from "../../../../tailwind.config";
import { showMessage } from "src/Core";

function UserInfoHeader() {
    //
    const personalInfo = [
        { icon: <IconUser />, label: "前端开发工程师" },
        { icon: <IconHome />, label: "前端" },
        { icon: <IconLocation />, label: "北京" },
    ];

    // HANDLE CLICK AVATAR
    const handdleClickAvatar = () => {
        showMessage("info", "Upload...");
    };

    return (
        <div className="bg-USERINFOBACKGROUND w-full h-[200px] bg-no-repeat bg-cover">
            <div className="h-full flex flex-col items-center justify-center gap-2">
                <Avatar
                    triggerIcon={<IconCamera />}
                    triggerIconStyle={{
                        color: tailwindConfig.theme.extend.colors.CBLUE,
                    }}
                    onClick={() => handdleClickAvatar()}
                    autoFixFontSize={false}
                    size={64}
                >
                    A
                </Avatar>
                <div>
                    <span>王立群</span>
                </div>
                <div className="flex flex-row gap-4">
                    {personalInfo.map((info) => (
                        <div className="flex flex-row gap-1">
                            <div>{info.icon}</div>
                            <span>{info.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default UserInfoHeader;

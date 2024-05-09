import { useCallback, useState } from "react";

import { IconCopy } from "@arco-design/web-react/icon";

import { MESSAGESTATUS, showMessage } from "src/Core";
import MockUserInfoDrawer from "src/Core/Components/Drawer/MockUserInfoDrawer";
import { MockUser } from "src/Domain/Model/MockUser";

interface VisibleDrawerInterface {
    isVisible: boolean;
    data: MockUser;
}

interface Props {
    mockUser: MockUser;
}

function IdCpn({ mockUser }: Props) {
    // STATE
    const [visibleDrawer, setVisibleDrawer] = useState<VisibleDrawerInterface>({
        isVisible: false,
        data: {
            user_name: "",
            full_name: "",
            email: "",
            phone: "",
            address: "",
            status: "Active",
            status_label: {
                value: "",
                text: "",
                label: "",
            },
            groups: "",
            group_list: [],
            id: 0,
            created_at: "",
            updated_at: "",
            updated_by: "",
        },
    });

    // HANDLE CLICK
    const handleClickEvent = (e: React.MouseEvent<SVGElement>) => {
        e.stopPropagation();
        navigator.clipboard.writeText(mockUser?.id.toString());

        showMessage(MESSAGESTATUS.INFO, `Copied ${mockUser?.id}`);
    };

    // HANDLE SETVISIBLE
    const handleSetVisible = useCallback(
        (isVisible: boolean) =>
            setVisibleDrawer((prev) => ({
                ...prev,
                isVisible: isVisible,
            })),
        []
    );

    return (
        <div className="flex flex-row items-center cursor-pointer">
            <span
                className="text-blue-600 hover:text-blue-800"
                onClick={() =>
                    setVisibleDrawer({
                        isVisible: true,
                        data: mockUser,
                    })
                }
            >
                #{mockUser?.id}
            </span>
            <IconCopy
                className="ms-[2px] hover:text-blue-600"
                onClick={(e: React.MouseEvent<SVGElement>) =>
                    handleClickEvent(e)
                }
            />
            <MockUserInfoDrawer
                data={visibleDrawer?.data}
                visible={visibleDrawer?.isVisible}
                handleSetVisible={handleSetVisible}
            />
        </div>
    );
}

export default IdCpn;

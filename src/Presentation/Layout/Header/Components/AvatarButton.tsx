import { Avatar } from "@arco-design/web-react";

import DropDownComponent from "src/Core/Components/Dropdown";
import DropList from "src/Core/Components/DropList";
import { LeftMenuInterface } from "src/Core";
import { IconPoweroff } from "@arco-design/web-react/icon";
import { useNavigate } from "react-router-dom";

import useViewModel from "src/Presentation/Login/LoginContainerViewModel";
import { memo, useEffect, useState } from "react";
import { User } from "src/Domain/Model/User";

function AvatarButton() {
    // STATE
    const [user, setUser] = useState<User>();

    // FROM VIEWMODEL
    const { handleSetUser, handleGetUser } = useViewModel();

    // NAVIGATE
    const navigate = useNavigate();

    // DATAS
    const dropListData: LeftMenuInterface[] = [
        {
            key: "General User",
            label: "General User",
            subList: [
                {
                    key: "Switch Role",
                    label: "Switch Role",
                },
            ],
        },
        {
            label: "User Setting",
            key: "User Setting",
        },
        {
            label: "See more",
            key: "See more",
            subList: [
                {
                    label: "Workplace",
                    key: "Workplace",
                    subList: [{ key: "workplace2", label: "Workplace2" }],
                },
                { label: "CardList", key: "CardList" },
            ],
        },
        {
            label: "d",
            key: "d",
        },
        {
            label: "Log out",
            key: "Log Out",
            icon: <IconPoweroff className="mr-0" />,
            handleClickFunction: () => {
                handleSetUser({
                    username: "",
                    password: undefined,
                });
                navigate("/login");
            },
        },
    ];

    // USE EFFECT
    useEffect(() => {
        (async () => {
            const userGot = await handleGetUser();
            setUser(userGot);
        })();
    }, []);

    return (
        <DropDownComponent
            dropList={<DropList data={dropListData} mode="pop" />}
        >
            <Avatar
                size={32}
                className={`bg-[color:var(--color-secondary)] text-[color:var(--color-text-2)] cursor-pointer text-sm`}
            >
                {user?.username[0]?.toUpperCase()}
            </Avatar>
        </DropDownComponent>
    );
}

export default memo(AvatarButton);

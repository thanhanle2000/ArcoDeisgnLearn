import { Avatar } from "@arco-design/web-react";
import { IconPoweroff } from "@arco-design/web-react/icon";
import { memo } from "react";
import { useNavigate } from "react-router-dom";
import { LeftMenuInterface, ROUTES } from "src/Core";
import DropDownComponent from "src/Core/Components/Dropdown";
import DropList from "src/Core/Components/DropList";
import {
    useAppDispatch,
    useAppSelector,
} from "src/Data/DataSource/Api/LocalDB/reduxHooks";
import { logoutUser } from "src/Data/DataSource/Api/LocalDB/Slices/AuthSlice";

function AvatarButton() {
    // REDUX
    const user = useAppSelector((state) => state?.auth?.user);
    const dispatch = useAppDispatch();

    // NAVIGATE
    const navigate = useNavigate();

    // DATAS
    const dropListData: LeftMenuInterface[] = [
        {
            key: "general-user",
            label: "General User",
            subList: [
                {
                    key: "Switch Role",
                    label: "Switch Role",
                },
            ],
        },
        {
            key: "user-setting",
            label: "User Setting",
        },
        {
            key: "see-more",
            label: "See more",
            subList: [
                {
                    key: "workplace",
                    label: "Workplace",
                    subList: [{ key: "workplace-2", label: "Workplace2" }],
                },
                { key: "card-list", label: "CardList" },
            ],
        },
        {
            label: "d",
            key: "d",
        },
        {
            key: "log-out",
            label: "Log Out",
            icon: <IconPoweroff className="mr-0" />,
            handleClickFunction: () => {
                dispatch(logoutUser());
                navigate(ROUTES.LOGIN);
            },
        },
    ];

    return (
        <DropDownComponent
            dropList={<DropList data={dropListData} mode="pop" />}
        >
            <Avatar
                size={32}
                className="bg-[color:var(--color-secondary)] text-[color:var(--color-text-2)] cursor-pointer text-sm"
            >
                {user?.username[0]?.toUpperCase()}
            </Avatar>
        </DropDownComponent>
    );
}

export default memo(AvatarButton);

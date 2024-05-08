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
                className='bg-[color:var(--color-secondary)] text-[color:var(--color-text-2)] cursor-pointer text-sm'
            >
                {user?.username[0]?.toUpperCase()}
            </Avatar>
        </DropDownComponent>
    );
}

export default memo(AvatarButton);

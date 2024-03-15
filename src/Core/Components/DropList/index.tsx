import { Divider, Menu } from "@arco-design/web-react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { LeftMenuInterface } from "src/Core";

const SubMenu = Menu.SubMenu;

// RENDER MENU ITEMS
function renderMenuItems(
    data: LeftMenuInterface[],
    navigate: NavigateFunction
) {
    return data?.map((item) =>
        item?.key === "d" ? (
            <Divider key={item?.key} className="m-0 mb-[4px]" />
        ) : item?.subList ? (
            <SubMenu
                key={item?.key}
                title={
                    <>
                        {item?.icon} {item?.label}
                    </>
                }
            >
                {renderMenuItems(item?.subList, navigate)}
            </SubMenu>
        ) : (
            <Menu.Item
                key={item?.key}
                onClick={() => {
                    if (item?.path) {
                        navigate(item?.path);
                    } else if (item?.handleClickFunction) {
                        item?.handleClickFunction();
                    }
                }}
                className={`flex flex-row items-center`}
            >
                {item?.icon} {item?.label}
            </Menu.Item>
        )
    );
}

interface Props {
    data: LeftMenuInterface[];
    mode: "horizontal" | "vertical" | "pop" | "popButton" | undefined;
    defaultOpenKey?: string;
    defaultSelectedKey?: string;
}
function DropList({ data, mode, defaultOpenKey, defaultSelectedKey }: Props) {
    const navigate = useNavigate();

    return (
        <Menu
            defaultOpenKeys={[`${defaultOpenKey}`]}
            defaultSelectedKeys={[`${defaultSelectedKey}`]}
            mode={mode}
            className={`h-full overflow-x-auto`}
        >
            {renderMenuItems(data ?? [], navigate)}
        </Menu>
    );
}

export default DropList;

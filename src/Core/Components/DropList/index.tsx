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
                    <div className="w-full">
                        <div className="table">
                            <div className="table-cell content-center align-middle text-center [&_.arco-icon]:block">
                                {item?.icon}
                            </div>
                            <span className="table-cell align-middle text-center">
                                {item?.label}
                            </span>
                        </div>
                    </div>
                }
                style={{ overflow: "hidden" }}
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
                className={`${
                    item?.path && item.path?.split("/").length > 2 ? "ms-4" : ""
                }`}
            >
                <div className="">
                    <div className="table">
                        <div className="table-cell content-center align-middle text-center [&_.arco-icon]:block">
                            {item?.icon}
                        </div>
                        <span className="table-cell align-middle text-center">
                            {item?.label}
                        </span>
                    </div>
                </div>
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
            className="h-full"
        >
            {renderMenuItems(data ?? [], navigate)}
        </Menu>
    );
}

export default DropList;

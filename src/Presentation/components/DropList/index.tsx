import { Divider, Menu } from "@arco-design/web-react";
import { DropListDataInterface } from "src/Core";

const SubMenu = Menu.SubMenu;
function DropList({
    data,
    mode,
    defaultOpenKey,
    defaultSelectedKey,
}: {
    data: DropListDataInterface[];
    mode: "horizontal" | "vertical" | "pop" | "popButton" | undefined;
    defaultOpenKey?: string;
    defaultSelectedKey?: string;
}) {
    return (
        <Menu
            defaultOpenKeys={[`${defaultOpenKey}`]}
            defaultSelectedKeys={[`${defaultSelectedKey}`]}
            mode={mode}
        >
            {data.map((item) =>
                item.key === "d" ? (
                    <Divider key={item.key} className="m-0 mb-[4px]" />
                ) : item.subList ? (
                    <SubMenu key={item.key} title={item.title}>
                        {item.subList.map((subItem) => (
                            <Menu.Item
                                key={subItem.key}
                                onClick={() => {
                                    if (subItem.handleClickFunction) {
                                        subItem.handleClickFunction();
                                    }
                                }}
                            >
                                {subItem.title}
                            </Menu.Item>
                        ))}
                    </SubMenu>
                ) : (
                    <Menu.Item
                        key={item.key}
                        onClick={() => {
                            if (item.handleClickFunction) {
                                item.handleClickFunction();
                            }
                        }}
                    >
                        {item.title}
                    </Menu.Item>
                )
            )}
        </Menu>
    );
}

export default DropList;

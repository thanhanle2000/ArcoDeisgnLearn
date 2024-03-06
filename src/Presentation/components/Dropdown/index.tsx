import { Dropdown } from "@arco-design/web-react";
import { ReactNode } from "react";

function DropDownComponent({
    children,
    dropList,
}: {
    children: ReactNode;
    dropList: ReactNode;
}) {
    return (
        <Dropdown droplist={dropList} position="br">
            {children}
        </Dropdown>
    );
}

export default DropDownComponent;

import { Dropdown } from "@arco-design/web-react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  dropList: ReactNode;
}
function DropDownComponent({ children, dropList }: Props) {
  return (
    <Dropdown droplist={dropList} position="br">
      {children}
    </Dropdown>
  );
}

export default DropDownComponent;

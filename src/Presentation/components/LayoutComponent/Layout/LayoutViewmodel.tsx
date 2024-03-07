import { useMemo, useState } from "react";
import { Button } from "@arco-design/web-react";
import { IconMenuFold, IconMenuUnfold } from "@arco-design/web-react/icon";

const collapsedWidth = 60;
const normalWidth = 280;

function LayoutViewmodel() {
  // STATE
  const [collapsed, setCollapsed] = useState(false);
  const [siderWidth, setSiderWidth] = useState(normalWidth);

  // HANDLE COLLAPSE
  const handleCollapse = (collapsed: boolean) => {
    setCollapsed(collapsed);
    setSiderWidth(collapsed ? collapsedWidth : normalWidth);
  };

  // HANDLE MOVING
  const handleMoving = (
    _e: MouseEvent,
    size: { width: number; height: number }
  ) => {
    if (size.width > collapsedWidth) {
      setSiderWidth(size.width);
      setCollapsed(!(size.width > collapsedWidth + 20));
    } else {
      setSiderWidth(collapsedWidth);
      setCollapsed(true);
    }
  };

  // TRIGGER BUTTON
  const triggerButton = useMemo(
    () => (
      <div
        className={`w-full flex flex-row ${
          siderWidth > collapsedWidth ? "justify-end" : "justify-center"
        }`}
      >
        <Button
          className={siderWidth > collapsedWidth ? "mr-4" : ""}
          shape="round"
          type="default"
          icon={collapsed ? <IconMenuUnfold /> : <IconMenuFold />}
        />
      </div>
    ),
    [collapsed, siderWidth]
  );

  return {
    collapsed,
    siderWidth,
    handleCollapse,
    handleMoving,
    triggerButton,
  };
}

export default LayoutViewmodel;

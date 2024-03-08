import Logo from "src/Presentation/components/Logo";
import DarkModeButton from "src/Presentation/components/LayoutComponent/Header/Components/DarkModeButton";
import LocaleButton from "src/Presentation/components/LayoutComponent/Header/Components/LocaleButton";
import styles from "src/Presentation/components/LayoutComponent/Header/Header.module.scss";
import { useMemo } from "react";
import { HeaderRightSideItemInterface } from "src/Core";
import RightSideList from "./Components/RightSideList";

function HeaderLayoutComponent() {
  // ITEMS
  const items: HeaderRightSideItemInterface[] = useMemo(
    () => [
      {
        key: "localeButtonHeader",
        content: <LocaleButton />,
      },

      {
        key: "darkModeButtonHeader",
        content: <DarkModeButton />,
      },
    ],
    []
  );
  return (
    <div
      className={`h-full flex flex-row justify-between items-center ${styles.header_container}`}
    >
      <div className="ps-[20px]">
        <Logo />
      </div>
      <div className="flex flex-row gap-2">
        <RightSideList items={items ?? []} />
      </div>
    </div>
  );
}

export default HeaderLayoutComponent;

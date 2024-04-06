import { useCallback, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import tailwindConfig from "../../../tailwind.config";

import { Button } from "@arco-design/web-react";
import { IconMenuFold, IconMenuUnfold } from "@arco-design/web-react/icon";

import { Fact } from "src/Domain/Model/Fact";
import FactAPIDataSourceImpl from "src/Data/DataSource/Api/FactAPIDataSourceImpl";
import { FactRepositoryImpl } from "src/Data/Repository/FactRepositoryImpl";
import { GetFacts } from "src/Domain/UseCase/Fact/GetFacts";

import { HeaderRightSideItemInterface } from "src/Core";
import LocaleButton from "src/Presentation/Layout/Header/Components/LocaleButton";
import DarkModeButton from "src/Presentation/Layout/Header/Components/DarkModeButton";
import AvatarButton from "src/Presentation/Layout/Header/Components/AvatarButton";

function LayoutViewModel() {
    // STATE
    const [collapsed, setCollapsed] = useState(false);
    const [siderWidth, setSiderWidth] = useState(
        tailwindConfig.theme.extend.spacing.SIDERNORMALWIDTH
    );
    const [facts, setFacts] = useState<Fact[]>([]);

    //IMPL
    const factsDataSourceImpl = new FactAPIDataSourceImpl();
    const factsRepositoryImpl = new FactRepositoryImpl(factsDataSourceImpl);

    // USE CASES
    const getFactsUseCase = new GetFacts(factsRepositoryImpl);

    // HANDLE COLLAPSE
    const handleCollapse = useCallback((collapsed: boolean) => {
        setCollapsed(collapsed);
        setSiderWidth(
            collapsed
                ? tailwindConfig.theme.extend.spacing.SIDERCOLLAPSEWIDTH
                : tailwindConfig.theme.extend.spacing.SIDERNORMALWIDTH
        );
    }, []);

    // HANDLE MOVING
    /*const handleMoving = (
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
  };*/

    //HANDLE CALL API
    const getFacts = async () => {
        setFacts(
            await getFactsUseCase.invoke("https://cat-fact.herokuapp.com/facts")
        );
    };

    // TRIGGER BUTTON
    const TriggerButton = useMemo(
        () => (
            <div
                className={`absolute bottom-3 ${
                    collapsed ? "left-0 right-0" : "right-3"
                } flex flex-row justify-center`}
            >
                <Button
                    className={collapsed ? "" : "mr-4"}
                    shape="round"
                    type="default"
                    icon={collapsed ? <IconMenuUnfold /> : <IconMenuFold />}
                    onClick={() => handleCollapse(!collapsed)}
                />
            </div>
        ),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [collapsed]
    );

    // HEADER ITEMS
    const headerItems: HeaderRightSideItemInterface[] = useMemo(
        () => [
            {
                key: "localeButtonHeader",
                content: <LocaleButton />,
            },

            {
                key: "darkModeButtonHeader",
                content: <DarkModeButton />,
            },
            {
                key: "avatarButtonHeader",
                content: <AvatarButton />,
            },
        ],
        []
    );

    const navigate = useNavigate();

    return {
        facts,
        getFacts,
        collapsed,
        siderWidth,
        handleCollapse,
        // handleMoving,
        TriggerButton,
        headerItems,
        navigate,
    };
}

export default LayoutViewModel;

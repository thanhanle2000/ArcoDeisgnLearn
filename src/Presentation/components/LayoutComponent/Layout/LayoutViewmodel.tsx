import { useMemo, useState } from "react";
import { Button } from "@arco-design/web-react";
import { IconMenuFold, IconMenuUnfold } from "@arco-design/web-react/icon";
import { Fact } from "src/Domain/Model/Fact";
import FactAPIDataSourceImpl from "src/Data/DataSource/Api/FactAPIDataSourceImpl";
import { FactRepositoryImpl } from "src/Data/Repository/FactRepositoryImpl";
import { GetFacts } from "src/Domain/UseCase/Fact/GetFacts";

const collapsedWidth = 60;
const normalWidth = 280;

function LayoutViewmodel() {
    //state
    const [collapsed, setCollapsed] = useState(false);
    const [siderWidth, setSiderWidth] = useState(normalWidth);
    const [facts, setFacts] = useState<Fact[]>([]);

    //
    const factsDataSourceImpl = new FactAPIDataSourceImpl();
    const factsRepositoryImpl = new FactRepositoryImpl(factsDataSourceImpl);

    // use cases
    const getFactsUseCase = new GetFacts(factsRepositoryImpl);

    //handle
    const getFacts = async () => {
        setFacts(
            await getFactsUseCase.invoke("https://cat-fact.herokuapp.com/facts")
        );
    };

    const handleCollapse = (collapsed: boolean) => {
        setCollapsed(collapsed);
        setSiderWidth(collapsed ? collapsedWidth : normalWidth);
    };

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

    // ui
    const triggerButton = useMemo(
        () => (
            <div
                className={`w-full flex flex-row ${
                    siderWidth > collapsedWidth
                        ? "justify-end"
                        : "justify-center"
                }`}
            >
                <Button
                    className={`${siderWidth > collapsedWidth ? "mr-4" : ""}`}
                    shape="round"
                    type="default"
                    icon={collapsed ? <IconMenuUnfold /> : <IconMenuFold />}
                />
            </div>
        ),
        [collapsed, siderWidth]
    );

    return {
        facts,
        getFacts,
        collapsed,
        siderWidth,
        handleCollapse,
        handleMoving,
        triggerButton,
    };
}

export default LayoutViewmodel;

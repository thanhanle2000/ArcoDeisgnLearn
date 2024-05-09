import Logo from "src/Core/Components/Logo";
import RightSideList from "./Components/RightSideList";

import { HeaderRightSideItemInterface } from "src/Core";

interface Props {
    items: HeaderRightSideItemInterface[];
}

function HeaderLayoutComponent({ items }: Props) {
    return (
        <div className="h-full flex flex-row justify-between items-center">
            <div className="ps-STANDARDCONTAINERPADDINGX">
                <Logo />
            </div>
            <div className="flex flex-row gap-2">
                <RightSideList items={items ?? []} />
            </div>
        </div>
    );
}

export default HeaderLayoutComponent;

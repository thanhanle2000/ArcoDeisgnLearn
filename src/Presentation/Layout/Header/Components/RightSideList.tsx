import { HeaderRightSideItemInterface } from "src/Core";

interface Props {
    items: HeaderRightSideItemInterface[];
}

function RightSideList({ items }: Props) {
    return (
        <ul className="px-STANDARDCONTAINERPADDINGX flex flex-row">
            {items?.map((item) => (
                <li className="px-[8px]" key={item?.key}>
                    {item?.content}
                </li>
            ))}
        </ul>
    );
}

export default RightSideList;

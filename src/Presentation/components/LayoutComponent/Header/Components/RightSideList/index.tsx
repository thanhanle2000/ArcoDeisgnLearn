import { HeaderRightSideItemInterface } from "src/Core";

function RightSideList({ items }: { items: HeaderRightSideItemInterface[] }) {
    return (
        <ul className="px-[20px] flex flex-row">
            {items.map((item) => {
                return (
                    <li className="px-[8px]" key={item.key}>
                        {item.content}
                    </li>
                );
            })}
        </ul>
    );
}

export default RightSideList;

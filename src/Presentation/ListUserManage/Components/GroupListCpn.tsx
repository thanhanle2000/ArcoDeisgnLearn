import { Tag } from "@arco-design/web-react";
import { UserGroup } from "src/Domain/Model/MockUser";

interface Props {
    GroupList: UserGroup[];
}

function GroupListCpn({ GroupList }: Props) {
    return (
        <div className="flex flex-row flex-wrap justify-start">
            {GroupList?.map((group, index) => {
                return (
                    <Tag
                        key={group?.name}
                        className={`${index === 0 ? "" : "ms-2"}`}
                        bordered
                    >
                        {group?.name}
                    </Tag>
                );
            })}
        </div>
    );
}

export default GroupListCpn;

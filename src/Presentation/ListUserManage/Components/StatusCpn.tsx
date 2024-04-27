import { Tag } from "@arco-design/web-react";
import { MOCKUSERSTATUS } from "src/Core";
import { MockUser } from "src/Domain/Model/MockUser";
import tailwindConfig from "../../../../tailwind.config";
interface Props {
    mockUser: MockUser;
}

function StatusCpn({ mockUser }: Props) {
    return (
        <div className="flex flex-row items-center">
            <Tag
                color={
                    mockUser?.status === MOCKUSERSTATUS?.ACTIVE
                        ? tailwindConfig?.theme?.colors?.GREEN
                        : tailwindConfig?.theme?.colors?.RED
                }
                bordered
            >
                {mockUser?.status_label?.text}
            </Tag>
        </div>
    );
}

export default StatusCpn;

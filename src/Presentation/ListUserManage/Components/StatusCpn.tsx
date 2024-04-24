import { Tag } from "@arco-design/web-react";
import { COLORS, MOCKUSERSTATUS } from "src/Core";
import { MockUser } from "src/Domain/Model/MockUser";

interface Props {
    mockUser: MockUser;
}

function StatusCpn({ mockUser }: Props) {
    return (
        <div className="flex flex-row items-center">
            <Tag
                color={
                    mockUser?.status === MOCKUSERSTATUS.ACTIVE
                        ? COLORS?.GREEN
                        : COLORS?.RED
                }
                bordered
            >
                {mockUser?.status_label?.text}
            </Tag>
        </div>
    );
}

export default StatusCpn;

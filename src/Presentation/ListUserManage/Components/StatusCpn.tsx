import { Tag } from "@arco-design/web-react";
import { COLORS } from "src/Core";
import { MockUser } from "src/Domain/Model/MockUser";

interface Props {
    mockUser: MockUser;
}

function StatusCpn({ mockUser }: Props) {
    return (
        <div className="flex flex-row items-center">
            {mockUser.status === "Active" ? (
                <Tag color={COLORS.GREEN} bordered>
                    {mockUser.status_label.text}
                </Tag>
            ) : (
                <Tag color={COLORS.RED} bordered>
                    {mockUser.status_label.text}
                </Tag>
            )}
        </div>
    );
}

export default StatusCpn;

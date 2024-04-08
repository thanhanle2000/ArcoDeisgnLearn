import { Message } from "@arco-design/web-react";
import { IconCopy } from "@arco-design/web-react/icon";
import { MockUser } from "src/Domain/Model/MockUser";

interface Props {
    mockUser: MockUser;
}

function IdCpn({ mockUser }: Props) {
    return (
        <div className="flex flex-row ">
            <span>{mockUser.id}</span>
            <IconCopy
                className="cursor-copy"
                onClick={(e: React.MouseEvent<SVGAElement>) => {
                    e.stopPropagation();
                    navigator.clipboard.writeText(mockUser.id.toString());
                    Message.info(`Copied ${mockUser.id}`);
                }}
            />
        </div>
    );
}

export default IdCpn;

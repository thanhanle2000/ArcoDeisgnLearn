import { Message } from "@arco-design/web-react";
import { IconCopy } from "@arco-design/web-react/icon";
import { MockUser } from "src/Domain/Model/MockUser";

interface Props {
    mockUser: MockUser;
}

function IdCpn({ mockUser }: Props) {
    // HANDLE CLICK
    const handleClickEvent = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        navigator.clipboard.writeText(mockUser?.id.toString());
        Message.info(`Copied ${mockUser?.id}`);
    };

    return (
        <div
            className="flex flex-row items-center cursor-pointer hover:text-[color:var(--color-text-3)]"
            onClick={handleClickEvent}
        >
            <span className="text-BLUE">#{mockUser?.id}</span>
            <IconCopy className="ms-[2px]" />
        </div>
    );
}

export default IdCpn;

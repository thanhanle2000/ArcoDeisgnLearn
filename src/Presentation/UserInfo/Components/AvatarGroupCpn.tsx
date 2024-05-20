import { Avatar } from "@arco-design/web-react";
const AvatarGroup = Avatar.Group;

function AvatarGroupCpn() {
    return (
        <AvatarGroup size={24}>
            <Avatar style={{ backgroundColor: "#7BC616" }}>A</Avatar>
            <Avatar style={{ backgroundColor: "#14C9C9" }}>B</Avatar>
            <Avatar style={{ backgroundColor: "#168CFF" }}>C</Avatar>
            <Avatar style={{ backgroundColor: "#FF7D00" }}>Arco</Avatar>
            <Avatar style={{ backgroundColor: "#FFC72E" }}>Design</Avatar>
        </AvatarGroup>
    );
}

export default AvatarGroupCpn;

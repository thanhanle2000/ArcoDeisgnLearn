import { Badge, Button } from "@arco-design/web-react";
import { IconNotification } from "@arco-design/web-react/icon";

function NotificationButton() {
    return (
        <Badge count={9} dot color="#165DFF" offset={[-2, 2]}>
            <Button shape="round" type="default" icon={<IconNotification />} />
        </Badge>
    );
}

export default NotificationButton;

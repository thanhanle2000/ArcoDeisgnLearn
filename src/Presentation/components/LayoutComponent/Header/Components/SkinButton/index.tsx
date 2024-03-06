import { Button } from "@arco-design/web-react";
import { IconSkin } from "@arco-design/web-react/icon";
import { useState } from "react";
import SkinModal from "./SkinModal";

function SkinButton() {
    const [isVisible, setIsVisible] = useState(false);

    const handleSetVisible = (isVsb: boolean) => {
        setIsVisible(isVsb);
    };

    return (
        <>
            <Button
                shape="round"
                type="default"
                icon={<IconSkin />}
                onClick={() => handleSetVisible(true)}
            />
            <SkinModal
                isVisible={isVisible}
                handleSetVisible={handleSetVisible}
            />
        </>
    );
}

export default SkinButton;

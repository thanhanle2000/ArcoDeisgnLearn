import { Drawer } from "@arco-design/web-react";

function DrawerComponent({
    title,
    content,
    footer,
    visible,
    handleSetVisible,
    placement,
}: {
    title: React.ReactNode;
    content?: React.ReactNode;
    footer?: React.ReactNode;
    visible: boolean;
    handleSetVisible: (isVisible: boolean) => void;
    placement?: "right" | "top" | "bottom" | "left" | undefined;
}) {
    return (
        <Drawer
            placement={placement || "right"}
            width={332}
            title={title}
            footer={footer ? footer : undefined}
            visible={visible}
            onOk={() => {
                handleSetVisible(false);
            }}
            onCancel={() => {
                handleSetVisible(false);
            }}
        >
            {content ? (
                content
            ) : (
                <>
                    <div>Here is an example text.</div>

                    <div>Here is an example text.</div>
                </>
            )}
        </Drawer>
    );
}

export default DrawerComponent;

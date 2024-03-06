import { Modal } from "@arco-design/web-react";

function ModalComponent({
    isVisible,
    handleSetVisible,
    title,
    content,
    footer,
}: {
    isVisible: boolean;
    handleSetVisible: (isVsb: boolean) => void;
    title: React.ReactNode;
    content?: React.ReactNode;
    footer?: React.ReactNode;
}) {
    return (
        <Modal
            title={title}
            visible={isVisible}
            onCancel={() => {
                handleSetVisible(false);
            }}
            onOk={() => {
                handleSetVisible(false);
            }}
            footer={footer ? footer : undefined}
        >
            {content ? (
                content
            ) : (
                <>
                    <p>Some content...</p>
                    <p>Some content...</p>
                    <p>Some content...</p>
                    <p>Some content...</p>
                    <p>Some content...</p>
                </>
            )}
        </Modal>
    );
}

export default ModalComponent;

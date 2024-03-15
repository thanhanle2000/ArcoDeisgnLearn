import ModalComponent from "./index";

function SkinModal({
    isVisible,
    handleSetVisible,
}: {
    isVisible: boolean;
    handleSetVisible: (isVsb: boolean) => void;
}) {
    const title = <div>Title</div>;
    return (
        <ModalComponent
            isVisible={isVisible}
            handleSetVisible={handleSetVisible}
            title={title}
        />
    );
}
export default SkinModal;

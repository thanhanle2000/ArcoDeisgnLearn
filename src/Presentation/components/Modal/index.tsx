import { Modal } from "@arco-design/web-react";

interface Props {
  isVisible: boolean;
  handleSetVisible: (isVsb: boolean) => void;
  title: React.ReactNode;
  content?: React.ReactNode;
  footer?: React.ReactNode;
}

function ModalComponent({
  isVisible,
  handleSetVisible,
  title,
  content,
  footer,
}: Props) {
  // ON CLOSE MODAL
  const onCloseModal = () => handleSetVisible(false);

  return (
    <Modal
      title={title}
      visible={isVisible}
      onCancel={onCloseModal}
      onOk={onCloseModal}
      footer={footer ?? undefined}
    >
      {content ?? (
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

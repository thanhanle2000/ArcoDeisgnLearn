import { Drawer } from "@arco-design/web-react";

interface Props {
  title: React.ReactNode;
  content?: React.ReactNode;
  footer?: React.ReactNode;
  visible: boolean;
  handleSetVisible: (isVisible: boolean) => void;
  placement?: "right" | "top" | "bottom" | "left" | undefined;
}
function DrawerComponent({
  title,
  content,
  footer,
  visible,
  handleSetVisible,
  placement,
}: Props) {
  // ON CLOSE MODAL
  const onCloseModal = () => handleSetVisible(false);

  return (
    <Drawer
      placement={placement || "right"}
      width={332}
      title={title}
      footer={footer ?? undefined}
      visible={visible}
      onOk={onCloseModal}
      onCancel={onCloseModal}
    >
      {content ?? (
        <>
          <div>Here is an example text.</div>
          <div>Here is an example text.</div>
        </>
      )}
    </Drawer>
  );
}

export default DrawerComponent;

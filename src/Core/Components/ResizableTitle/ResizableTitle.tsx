import { Resizable } from "react-resizable";
import CustomResizeHandle from "src/Core/Components/CustomResizeHandle";

function ResizableTitle(props: any) {
    const { onResize, width, ...restProps } = props;

    if (!width) {
        return <th {...restProps} />;
    }

    return (
        <Resizable
            width={width}
            height={0}
            handle={<CustomResizeHandle />}
            onResize={onResize}
            draggableOpts={{
                enableUserSelectHack: false,
            }}
        >
            <th {...restProps} />
        </Resizable>
    );
}

export default ResizableTitle;

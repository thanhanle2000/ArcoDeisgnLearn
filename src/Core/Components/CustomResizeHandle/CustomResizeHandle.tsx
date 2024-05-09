import { LegacyRef, forwardRef } from "react";

const CustomResizeHandle = forwardRef(
    (props: any, ref: LegacyRef<HTMLSpanElement> | undefined) => {
        const { handleAxis, ...restProps } = props;
        return (
            <span
                ref={ref}
                className={`react-resizable-handle react-resizable-handle-${handleAxis}`}
                {...restProps}
                onClick={(e) => {
                    e.stopPropagation();
                }}
            />
        );
    }
);

export default CustomResizeHandle;

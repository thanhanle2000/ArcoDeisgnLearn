import { useState, useEffect } from "react";

export const useWidthElement = (queries: string[]) => {
    const [elementWidth, setElementWidth] = useState<number>(0);

    const findFirstNonNullElement = (queries: string[]): HTMLElement | null => {
        for (const query of queries) {
            const element = document.querySelector(query) as HTMLElement | null;
            if (element !== null) {
                return element;
            }
        }
        return null;
    };

    useEffect(() => {
        const element = findFirstNonNullElement(queries);

        const updateFilterWidth = () => {
            if (element) {
                const computedStyle = getComputedStyle(element);
                setElementWidth(
                    element.offsetWidth +
                        parseInt(computedStyle.marginRight, 10)
                );
            }
        };

        updateFilterWidth();

        if (element) {
            const resizeObserver = new ResizeObserver(updateFilterWidth);
            resizeObserver.observe(element);

            return () => resizeObserver.unobserve(element);
        }

        return () => {};
    }, [queries]);

    return elementWidth;
};

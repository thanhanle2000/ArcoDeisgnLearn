import { useCallback, useRef, useEffect } from "react";

/**
 * Provides a debounced function that delays invoking `callback` until after `delay` milliseconds
 * have elapsed since the last time the debounced function was invoked.
 *
 * @param callback Function to debounce.
 * @param delay The number of milliseconds to delay.
 * @returns A debounced version of the `callback`.
 */
function useDebouncedFunction<T extends (...args: any[]) => void>(
    callback: T,
    delay: number
): T {
    const functionTimeoutHandler = useRef<number | null>(null);

    const debouncedFunction = useCallback(
        (...args: Parameters<T>) => {
            if (functionTimeoutHandler.current) {
                clearTimeout(functionTimeoutHandler.current);
            }
            functionTimeoutHandler.current = setTimeout(
                () => callback(...args),
                delay
            );
        },
        [callback, delay]
    ) as T;

    useEffect(() => {
        return () => {
            if (functionTimeoutHandler.current) {
                clearTimeout(functionTimeoutHandler.current);
            }
        };
    }, []);

    return debouncedFunction;
}

export default useDebouncedFunction;

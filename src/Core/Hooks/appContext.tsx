import React, { createContext, useState, useContext } from "react";

interface HeightType {
    key: string;
    height: number;
}
interface AppContextType {
    heights: { [key: string]: number };
    setHeight: (heightList: HeightType[]) => void;
}

const AppContext = createContext<AppContextType>({
    heights: {},
    setHeight: () => {},
});

export function AppProvider({ children }: { children: React.ReactNode }) {
    const [heights, setHeights] = useState<{ [key: string]: number }>({});

    const setHeight = (heightList: HeightType[]) => {
        const newHeights = heightList.reduce((acc, curr) => {
            acc[curr.key] = curr.height;
            return acc;
        }, {} as { [key: string]: number });

        setHeights((prevHeights) => ({ ...prevHeights, ...newHeights }));
    };

    return (
        <AppContext.Provider value={{ heights, setHeight }}>
            {children}
        </AppContext.Provider>
    );
}

export const useAppContext = () => useContext(AppContext);

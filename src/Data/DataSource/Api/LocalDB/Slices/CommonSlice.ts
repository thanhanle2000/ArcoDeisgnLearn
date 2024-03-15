import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const CommonSlice = createSlice({
    name: "common",
    initialState: {
        locale: "en-US",
        isDarkTheme: false,
    },

    reducers: {
        changeThemeDark: (state, action: PayloadAction<boolean>) => {
            return {
                ...state,
                isDarkTheme: action.payload,
            };
        },
        ChangeLocale: (state, action: PayloadAction<string>) => {
            return {
                ...state,
                locale: action.payload,
            };
        },
    },
});

export const { changeThemeDark, ChangeLocale } = CommonSlice.actions;

export default CommonSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "src/Domain/Model/User";

const AuthSlice = createSlice({
    name: "auth",
    initialState: {
        user: {
            username: "",
            password: "",
        },
    },

    reducers: {
        loginUser: (state, action: PayloadAction<User>) => {
            return {
                ...state,
                user: {
                    username: action?.payload?.username,
                    password: action?.payload?.password || "",
                },
            };
        },
        logoutUser: (state) => {
            return {
                ...state,
                user: {
                    username: "",
                    password: "",
                },
            };
        },
    },
});

export const { loginUser, logoutUser } = AuthSlice.actions;

export default AuthSlice.reducer;

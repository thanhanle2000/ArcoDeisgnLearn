import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "src/Domain/Model/User";

const AuthSlice = createSlice({
    name: "auth",
    initialState: {
        user: {
            isLoggedIn: false,
            username: "",
            password: "",
            isSavePassword: false,
        },
    },

    reducers: {
        loginUser: (state, action: PayloadAction<User>) => {
            return {
                ...state,
                user: {
                    isLoggedIn: true,
                    username: action?.payload?.username,
                    password: action?.payload?.password || "",
                    isSavePassword: action.payload.isSavePassword,
                },
            };
        },
        logoutUser: (state) => {
            return {
                ...state,
                user: {
                    isLoggedIn: false,
                    username: state.user.isSavePassword
                        ? state.user.username
                        : "",
                    password: state.user.isSavePassword
                        ? state.user.password
                        : "",
                    isSavePassword: state.user.isSavePassword,
                },
            };
        },
    },
});

export const { loginUser, logoutUser } = AuthSlice.actions;

export default AuthSlice.reducer;

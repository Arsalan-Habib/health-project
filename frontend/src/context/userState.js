import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import axios from "axios";
import {
    USER_LOGIN_FAIL,
    USER_LOGIN_SUCCESS,
    USER_REGISTER_FAIL,
    USER_REGISTER_SUCCESS,
} from "./constants";

const initialState = {
    user: null,
    error: null,
};

// Create the User Context
export const UserContext = createContext(initialState);

// The Provider component
export const UserProvider = ({ children }) => {
    // Linking to the reducer
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions

    // Login the user
    const userLogin = async (email, password) => {
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };

        try {
            const { data } = await axios.post(
                "/api/users/login",
                { email, password },
                config
            );

            dispatch({
                type: USER_LOGIN_SUCCESS,
                payload: data,
            });
        } catch (error) {
            dispatch({
                type: USER_LOGIN_FAIL,
                payload:
                    error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message,
            });
        }
    };

    // Register new user
    const userRegister = async (user) => {
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };

        try {
            const { data } = await axios.post("/api/users", user, config);

            dispatch({
                type: USER_REGISTER_SUCCESS,
                payload: data,
            });
        } catch (error) {
            dispatch({
                type: USER_REGISTER_FAIL,
                payload: error.message,
            });
        }
    };

    return (
        <UserContext.Provider
            value={{
                user: state.user,
                error: state.error,
                userLogin,
                userRegister,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};

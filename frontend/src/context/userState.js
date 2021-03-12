import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import axios from "axios";
import { USER_LOGIN_SUCCESS } from "./constants";

const initialState = {
    user: {},
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
            console.log("login error");
        }
    };

    return (
        <UserContext.Provider
            value={{
                user: state.user,
                error: state.error,
                userLogin,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};

import {
    USER_LOGIN_FAIL,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_REGISTER_FAIL,
    USER_REGISTER_SUCCESS,
} from "./constants";

const AppReducer = (state, action) => {
    switch (action.type) {
        case USER_LOGIN_SUCCESS:
            return {
                ...state,
                user: action.payload,
            };

        case USER_LOGIN_FAIL:
            return {
                ...state,
                error: action.payload,
            };

        case USER_REGISTER_SUCCESS:
            return {
                ...state,
                user: action.payload,
            };

        case USER_REGISTER_FAIL:
            return {
                ...state,
                error: action.payload,
            };

        case USER_LOGIN_REQUEST:
        default:
            return state;
    }
};

export default AppReducer;

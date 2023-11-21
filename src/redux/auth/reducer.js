import {
    USER_SIGN_IN_FAILURE,
    USER_SIGN_IN_REQ,
    USER_SIGN_IN_SUCCESS,
    USER_SIGN_UP_FAILURE,
    USER_SIGN_UP_REQ,
    USER_SIGN_UP_SUCCESS
} from "./actionType";


const initialState = {
    isLoading: false,
    isErr: false,
    auth: false,
    authToken: "",
}

export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case USER_SIGN_UP_REQ:
            return {
                ...state,
                isLoading: true,
            };
        case USER_SIGN_UP_SUCCESS:
            return {
                ...state,
                isLoading: false
            }
        case USER_SIGN_UP_FAILURE:
            return {
                ...state,
                isLoading: false,
                isErr: true
            }


        case USER_SIGN_IN_REQ:
            return {
                ...state,
                isLoading: true,
            }
        case USER_SIGN_IN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                auth: true,
                authToken: payload
            }
        case USER_SIGN_IN_FAILURE:
            return {
                ...state,
                isLoading: false,
                isErr: true
            }
        default:
            return state;
    }
}
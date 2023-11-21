import {
    GET_QNS_FAILURE,
    GET_QNS_REQ,
    GET_QNS_SUCCESS,
    GET_QTN_BY_Id_FAILURE,
    GET_QTN_BY_Id_REQ,
    GET_QTN_BY_Id_SUCCESS,
    POST_ANS_FAILURE,
    POST_ANS_REQ,
    POST_ANS_SUCCESS,
    POST_NEW_QTN_FAILURE,
    POST_NEW_QTN_REQ,
    POST_NEW_QTN_SUCCESS
} from "./actionType";


const initialState = {
    isLoading: false,
    isErr: false,
    data: [],
    msg: "",
    questionById: []
}

export const reducer = (state = initialState, { type, payload }) => {

    switch (type) {
        case GET_QNS_REQ:
            return { ...state, isLoading: true }
        case GET_QNS_SUCCESS:
            return { ...state, isLoading: false, data: payload }
        case GET_QNS_FAILURE:
            return { ...state, isLoading: false, isErr: true }


        case POST_NEW_QTN_REQ:
            return { ...state, isLoading: true }
        case POST_NEW_QTN_SUCCESS:
            return { ...state, isLoading: false, msg: payload }
        case POST_NEW_QTN_FAILURE:
            return { ...state, isLoading: false, isErr: true }


        case POST_ANS_REQ:
            return { ...state, isLoading: true }
        case POST_ANS_SUCCESS:
            return { ...state, isLoading: false, msg: payload }
        case POST_ANS_FAILURE:
            return { ...state, isLoading: false, isErr: true }


        case GET_QTN_BY_Id_REQ:
            return { ...state, isLoading: true }
        case GET_QTN_BY_Id_SUCCESS:
            return { ...state, isLoading: false, questionById: payload }
        case GET_QTN_BY_Id_FAILURE:
            return { ...state, isLoading: false, isErr: true }

        default:
            return state;
    }
}
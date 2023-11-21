import axios from "axios"
import {
    USER_SIGN_IN_FAILURE,
    USER_SIGN_IN_REQ,
    USER_SIGN_IN_SUCCESS,
    USER_SIGN_UP_FAILURE,
    USER_SIGN_UP_REQ,
    USER_SIGN_UP_SUCCESS
} from "./actionType"

import { base_url } from "../../api"


// user-sign-up function
export const userSignUp = (userData) => (dispatch) => {

    dispatch({ type: USER_SIGN_UP_REQ })

    return axios.post(`${base_url}/users/signup`, userData)
        .then((res) => {
            console.log({ res });
            dispatch({ type: USER_SIGN_UP_SUCCESS, payload: res.data.msg })
        })
        .catch((err) => {
            console.log({ err });
            dispatch({ type: USER_SIGN_UP_FAILURE })
        })
}


// user-sign-in function
export const userSignIn = (userData) => (dispatch) => {

    dispatch({ type: USER_SIGN_IN_REQ });

    return axios.post(`${base_url}/users/login`, userData)
        .then(res => {
            console.log({ res });
            sessionStorage.setItem('authToken', res.data.token)
            dispatch({ type: USER_SIGN_IN_SUCCESS, payload: res.data.token })
        })
        .catch(err => {
            console.log({ err });
            dispatch({ type: USER_SIGN_IN_FAILURE })
        })
}

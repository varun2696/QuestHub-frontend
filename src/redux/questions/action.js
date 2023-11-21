import axios from "axios"
import { base_url } from "../../api"
import { GET_QNS_FAILURE, GET_QNS_REQ, GET_QNS_SUCCESS, GET_QTN_BY_Id_FAILURE, GET_QTN_BY_Id_REQ, GET_QTN_BY_Id_SUCCESS, POST_ANS_FAILURE, POST_ANS_REQ, POST_ANS_SUCCESS, POST_NEW_QTN_FAILURE, POST_NEW_QTN_REQ, POST_NEW_QTN_SUCCESS } from "./actionType"


// for getting questions data 
export const getQuestions = (dispatch) => {

    dispatch({ type: GET_QNS_REQ })

    return axios.get(`${base_url}/questions`)
        .then(res => {
            console.log({ res });
            dispatch({ type: GET_QNS_SUCCESS, payload: res.data })
        })
        .catch(err => {
            console.log({ err });
            dispatch({ type: GET_QNS_FAILURE })
        })
}



// for posting a new question
export const postNewQuestion = (data) => (dispatch) => {

    const authToken = sessionStorage.getItem('authToken');

    if (authToken) {
        dispatch({ type: POST_NEW_QTN_REQ });

        const headers = {
            Authorization: `Bearer ${authToken}`,
        };

        return axios.post(`${base_url}/question/create`, data, { headers })
            .then((response) => {
                console.log("response", response);
                dispatch({ type: POST_NEW_QTN_SUCCESS, payload: response.data.msg })
            })
            .catch((err) => {
                console.log({ err });
                dispatch({ type: POST_NEW_QTN_FAILURE })
            })
    }
    else {
        alert("Please Login")
    }
}


// for posting answer
export const postYourAnswer = (id, data) => (dispatch) => {

    const authToken = sessionStorage.getItem('authToken');

    if (authToken) {
        dispatch({ type: POST_ANS_REQ });

        const headers = {
            Authorization: `Bearer ${authToken}`,
        };

        return axios.post(`${base_url}/question/${id}/answers`, data, { headers })
            .then((response) => {
                console.log("response", response);
                dispatch({ type: POST_ANS_SUCCESS, payload: response.data.msg })
            })
            .catch((err) => {
                console.log({ err });
                dispatch({ type: POST_ANS_FAILURE })
            })
    }
    else {
        alert("Please Login")
    }
}



// get a question by id
export const getQuestionbyId = (id) => (dispatch) => {
    // Retrieve the token
    const authToken = sessionStorage.getItem('authToken');

    // Set the authorization header with the token
    if (authToken) {
        dispatch({type:GET_QTN_BY_Id_REQ})

        const headers = {
            Authorization: `Bearer ${authToken}`,
        };

        // Make the GET request with the headers
        return axios.get(`${base_url}/question/${id}`, { headers })
            .then((response) => {
                // console.log("response", response);
                dispatch({ type: GET_QTN_BY_Id_SUCCESS, payload: response.data })
            })
            .catch((err) => {
                console.log({ err });
                dispatch({ type: GET_QTN_BY_Id_FAILURE })
            })
    }
    else {
        alert("Please Login")
    }
};
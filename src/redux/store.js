import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import {reducer as authReducer} from "./auth/reducer";
import {reducer as questionsReducer} from "./questions/reducer"
import thunk from "redux-thunk";


const rootReducer = combineReducers({
   authReducer,
   questionsReducer
})


export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))
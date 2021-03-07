import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'

import error from "./ErrorReducers"
import auth from "./AuthReducers"
import { polls, userPolls, curPoll} from "./PollReducers"

const rootReducer = combineReducers({
    error,
    auth,
    polls,
    userPolls,
    curPoll
})

const initialState = {
    error: {message: null}
}
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    rootReducer,
    initialState,
    composeEnhancer(
        applyMiddleware(thunk),
    )
)


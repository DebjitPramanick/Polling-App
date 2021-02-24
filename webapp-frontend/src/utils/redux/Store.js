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

export const store = createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)


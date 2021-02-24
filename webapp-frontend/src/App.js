import React from 'react'
import "./App.css"
import { Provider } from 'react-redux'
import { store } from "./utils/redux/Store"
import Home from './pages/HomePage/Home'
import { setCurrentUser, setToken } from './utils/redux/Actions'
import decode from 'jwt-decode'


const App = () => {

    if (localStorage.jwttoken) {
        setToken(localStorage.jwttoken)
        try {
            store.dispatch(setCurrentUser(decode(localStorage.jwttoken)))
        } catch (error) {
            store.dispatch(setCurrentUser({}));
        }
    }

    return (
        <Provider store={store}>
            <div>
                <Home />
            </div>
        </Provider>
    )
}

export default App

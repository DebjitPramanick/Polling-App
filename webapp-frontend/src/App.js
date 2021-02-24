import React from 'react'
import "./App.css"
import { Provider } from 'react-redux'
import { store } from "./utils/redux/Store"
import Home from './pages/HomePage/Home'

const App = () => {
    return (
        <Provider store={store}>
            <div>
                <Home />
            </div>
        </Provider>
    )
}

export default App

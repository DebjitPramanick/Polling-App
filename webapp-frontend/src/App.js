import React from 'react'
import Home from './components/Home'
import "./App.css"
import { Provider } from 'react-redux'
import { store } from "./utils/redux/Store"

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

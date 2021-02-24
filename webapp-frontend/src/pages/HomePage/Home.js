import React, { useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import MenuBar from "../../components/MenuBar"
import { setCurrentUser, setToken } from '../../utils/redux/Actions'
import { store } from '../../utils/redux/Store'
import decode from 'jwt-decode'
import "./Home.css"
import RouteViews from '../../utils/RouteViews'

const Home = () => {

    const authUser = useSelector(state => state.auth)
    const { isAuth } = authUser

    if (localStorage.jwttoken) {
        setToken(localStorage.jwttoken)
        try {
            store.dispatch(setCurrentUser(decode(localStorage.jwttoken)))
        } catch (error) {
            store.dispatch(setCurrentUser({}));
        }
    }


    return (
        <div>
            <Router>
                <MenuBar isAuth={isAuth} />
                <div className="container">
                    <RouteViews />
                    <img src='https://www.vevox.com/getmedia/0fee47dd-38ea-4a00-9320-ac0e31e89b2b/live-polling_twitter_1024x512p.png?width=1000' />
                </div>
            </Router>
        </div>
    )
}

export default Home

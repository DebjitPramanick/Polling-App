import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import MenuBar from "../../components/MenuBar"
import { setCurrentUser, setToken } from '../../utils/redux/Actions'
import { store } from '../../utils/redux/Store'
import decode from 'jwt-decode'
import "./Home.css"
import RouteViews from '../../utils/RouteViews'
import AuthPage from '../AuthPage/AuthPage'

const Home = () => {

    const authUser = useSelector(state => state.auth)


    return (
        <div>
            <Router>
                <MenuBar authUser={authUser} />
                <RouteViews />
            </Router>
        </div>
    )
}

export default Home

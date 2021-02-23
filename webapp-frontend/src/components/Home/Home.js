import React, {useEffect} from 'react'
import MenuBar from "../MenuBar"
import axios from "../../utils/Axios"
import { addError, authUser, setCurrentUser, setToken, logout } from '../../utils/redux/Actions'
import { store } from '../../utils/redux/Store'
import decode from 'jwt-decode'
import Auth from '../Auth/Auth'
import "./Home.css"

const Home = () => {

    if(localStorage.jwttoken){
        setToken(localStorage.jwttoken)
        try {
            store.dispatch(setCurrentUser(decode(localStorage.jwttoken)))
        } catch (error) {
            store.dispatch(setCurrentUser({}));
        }
    }
    

    return (
        <div>
            <MenuBar />
            <div className="container">
                <Auth />
            </div>
            
        </div>
    )
}

export default Home

import React, {useEffect} from 'react'
import MenuBar from "./MenuBar"
import axios from "../utils/Axios"
import { addError, authUser, setCurrentUser, setToken, logout } from '../utils/redux/Actions'
import { store } from '../utils/redux/Store'
import decode from 'jwt-decode'

const Home = () => {

    if(localStorage.jwttoken){
        setToken(localStorage.jwttoken)
        try {
            store.dispatch(setCurrentUser(decode(localStorage.jwttoken)))
        } catch (error) {
            store.dispatch(setCurrentUser({}));
            store.dispatch(addError(error))
        }
    }

    const login = () => {
        store.dispatch(authUser({
            username: "Debjit Pramanick",
            password: "1234"
        }))
    }
    

    // useEffect(() => {
    //     axios.instance.post('/auth/login',{
    //         username: "Sujan Pramanick",
    //         password: "1234"
    //     }).then(res => {
    //         localStorage.setItem('jwttoken',res.data.token)
    //     })
    // }, [])

    return (
        <div>
            <MenuBar />
            <button onClick={login}>
                Log in
            </button>
            <button onClick={logout()}>
                Log out
            </button>
        </div>
    )
}

export default Home

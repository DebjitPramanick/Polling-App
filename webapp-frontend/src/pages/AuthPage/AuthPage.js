import React from 'react'
import { Redirect } from 'react-router-dom'
import Auth from '../../components/Auth/Auth'

const AuthPage = ({type, isAuth}) => {

    if(isAuth) return <Redirect to="/"/>  

    return (
        <div>
            <Auth type={type}/>
        </div>
    )
}

export default AuthPage

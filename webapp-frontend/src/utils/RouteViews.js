import React from 'react'
import { Route, Switch } from 'react-router-dom'
import AuthPage from '../pages/AuthPage/AuthPage'
import { useSelector, useDispatch } from 'react-redux'
import Home from '../pages/HomePage/Home'

const RouteViews = () => {

    const authUser = useSelector(state => state.auth)
    const { isAuth } = authUser;

    return (
        <div>
            <Switch>
                <Route exact path="/login" render={() => <AuthPage type="login" isAuth={isAuth}/>}></Route>
                <Route exact path="/register" render={() => <AuthPage type="register" isAuth={isAuth}/>}></Route>
            </Switch>
        </div>
    )
}

export default RouteViews

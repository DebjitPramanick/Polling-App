import React, {useEffect} from 'react'
import { Route, Switch } from 'react-router-dom'
import AuthPage from '../pages/AuthPage/AuthPage'
import { useSelector, useDispatch } from 'react-redux'
import Home from '../pages/HomePage/Home'
import ProfilePage from '../pages/ProfilePage/ProfilePage'
import PollContainer from '../components/PollContainer/PollContainer'
import { getPolls } from './redux/Actions'
import UtilBox from '../components/PollContainer/UtilBox'

const RouteViews = () => {

    const authUser = useSelector(state => state.auth)
    const { isAuth } = authUser;

    const dispatch = useDispatch();
    const polls = useSelector(state => state.polls)

    useEffect(() => {
        dispatch(getPolls())
    }, [])
// <UtilBox />
    return (
        <div>
            <Switch>
                <Route exact path="/" render={() => 
                    <div className="main-container">
                        <PollContainer polls={polls} controls={false}/>
                        <UtilBox />
                    </div>
                }></Route>
                <Route exact path="/login" render={() => <AuthPage type="login" isAuth={isAuth}/>}></Route>
                <Route exact path="/register" render={() => <AuthPage type="register" isAuth={isAuth}/>}></Route>
                <Route exact path="/profile" render={() => <ProfilePage authUser={authUser} />}></Route>
            </Switch>
        </div>
    )
}

export default RouteViews

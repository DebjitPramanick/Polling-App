import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Redirect } from 'react-router-dom';
import { getUserPolls, logout } from '../../utils/redux/Actions'
import "./ProfilePage.css"

import HomeIcon from '@material-ui/icons/Home';

const ProfilePage = ({ authUser }) => {


    const dispatch = useDispatch();
    const userPolls = useSelector(state => state.userPolls)
    const { isAuth, user } = authUser;

    const handleLogout = () => {
        console.log("Logged out")
        dispatch(logout())
    }
    
    useEffect(() => {
        dispatch(getUserPolls())
    }, [])

    const showPolls = () => {
        console.log("User", user.username)
        console.log(userPolls)
    }

    

    if (!isAuth) return <Redirect to="/" />

    return (
        <div>
            <div className="sub-container">
                <Link className="back-to-home" to="/"><HomeIcon className="icon" /></Link>
                <p className="username">{user.username}</p>

                <div className="flex-container">
                    <div className="your-polls" onClick={showPolls}>
                        <div className="overlay">Your Polls</div>
                    </div>
                    <div className="your-votes">
                        <div className="overlay">Your Votes</div>
                    </div>
                </div>



                <button onClick={handleLogout}
                    className="logout-btn">
                    Log Out
                </button>
            </div>

        </div>
    )
}

export default ProfilePage

import React from 'react'
import { useDispatch } from 'react-redux'
import { Link, Redirect } from 'react-router-dom';
import { logout } from '../../utils/redux/Actions'
import "./ProfilePage.css"

import HomeIcon from '@material-ui/icons/Home';

const ProfilePage = ({ authUser }) => {

    const { isAuth, user } = authUser;
    const dispatch = useDispatch();

    const handleLogout = () => {
        console.log("Logged out")
        dispatch(logout())
    }

    if (!isAuth) return <Redirect to="/" />

    return (
        <div className="container">
            <div className="sub-container">
                <Link className="back-to-home" to="/"><HomeIcon className="icon" /></Link>
                <p className="username">{user.username}</p>

                <div className="flex-container">
                    <div className="your-polls">
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

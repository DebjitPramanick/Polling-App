import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Redirect } from 'react-router-dom';
import { getUserPolls, logout } from '../../utils/redux/Actions'
import "./ProfilePage.css"

import HomeIcon from '@material-ui/icons/Home';
import Popup from '../../components/Popup/Popup';
import InputBox from '../../components/Input Popup/InputBox';

const ProfilePage = ({ authUser }) => {

    const [popup, setPopup] = useState(false)
    const [ip, setIp] = useState(false)
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

    if (!isAuth) return <Redirect to="/" />

    return (
        <div>
            <div className="sub-container">
                {popup && (
                    <Popup setPopup={setPopup} polls={userPolls} />
                )}
                {ip && (
                    <InputBox setIp={setIp} />
                )}
                <Link className="back-to-home" to="/"><HomeIcon className="icon" /></Link>
                <p className="username">{user.username}</p>

                <div className="flex-container">
                    <div className="your-polls" onClick={() => setPopup(true)}>
                        <div className="overlay">Your Polls</div>
                    </div>
                    <div className="create-polls" onClick={() => setIp(true)}>
                        <div className="overlay">Create Polls</div>
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

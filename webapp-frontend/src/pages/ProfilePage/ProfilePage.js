import React from 'react'
import { useDispatch } from 'react-redux'
import { Link, Redirect } from 'react-router-dom';
import { logout } from '../../utils/redux/Actions'


const ProfilePage = ({authUser}) => {

    const {isAuth, user} = authUser;
    const dispatch = useDispatch(); 

    const handleLogout = () =>{
        console.log("Logged out")
        dispatch(logout())
    }

    if (!isAuth) return <Redirect to="/" /> 

    return (
        <div>
            <Link className="back-to-home" to="/">Back to home</Link>
            <p>{user.username}</p>
            <button onClick={handleLogout}>
                Log Out
            </button>
        </div>
    )
}

export default ProfilePage

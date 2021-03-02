import { Link } from 'react-router-dom'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const UtilBox = () => {

    const authUser = useSelector(state => state.auth)
    const { isAuth, user } = authUser

    return (
        <div className="util-box">
            {isAuth ? (
                <h2>Welcome {user.username}</h2>
            ) : (
                    <h2>Welcome to Polling App</h2>
                )}

            {isAuth ? (
                <div className="box-container flex">
                    <Link to="/profile">
                        <div className="actions">
                            Create Poll
                        </div>
                    </Link>
                    <Link to="/profile">
                        <div className="actions second">
                            All Polls
                        </div>
                    </Link>

                </div>
            ) : (
                    <div className="box-container">
                        <div className="login-message">
                            Create account to upload polls and vote.
                        </div>
                        <Link to="/register">
                            <button className="login-button">
                                Create Account
                            </button>
                        </Link>

                    </div>
                )}
        </div>
    )
}

export default UtilBox

import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CircularProgress from '@material-ui/core/CircularProgress';
import { authUser, registerUser, removeError } from '../../utils/redux/Actions';
import "./Auth.css"
import CloseIcon from '@material-ui/icons/Close';
import { Link } from 'react-router-dom';

const Auth = ({ type }) => {

    const authError = useSelector(state => state.error);
    const dispatch = useDispatch();
    const { message } = authError;


    const [show, setShow] = useState(false)
    const [error, setError] = useState(false)
    const [data, setData] = useState({
        username: '',
        password: ''
    })

    const handleLogin = (e) => {
        e.preventDefault()
        if (data.username && data.password) {
            dispatch(authUser({
                username: data.username,
                password: data.password
            }))

            setShow(true)
            
        }
        else alert("Fill required inputs.")
    }

    const handleRegister = (e) => {
        e.preventDefault()
        if (data.username && data.password) {
            dispatch(registerUser({
                username: data.username,
                password: data.password
            }))

            setShow(true)

        }
        else alert("Fill required inputs.")
    }

    useEffect(() => {
        if (message) {
            console.log(message)
            setError(true)
            setShow(false)
        }
    }, [message])

    const handleError = () => {
        setError(false)
        setData({ username: '', password: '' });
        dispatch(removeError())
    }


    return (
        <div className="container">

            <form className="auth-form">

                {(type === 'login') ? (
                    <div className="heading">Log-in</div>
                ) : (
                        <div className="heading">Register</div>
                )}

                {error &&
                    (<p className="error-bar">
                        {message}
                        <CloseIcon className="close-icon"
                            onClick={handleError} />
                    </p>)
                }

                <input placeholder="Enter username: " value={data.username}
                    onChange={(e) => setData({ ...data, username: e.target.value })}>

                </input>

                <input placeholder="Enter password: " value={data.password}
                    onChange={(e) => setData({ ...data, password: e.target.value })}>
                </input>

                {(type === 'login') ? (
                    <button onClick={(e) => handleLogin(e)}>
                        Log-in
                        {show && <span><CircularProgress size="14px" thickness={7} /></span>}
                    </button>
                ) : (
                        <button onClick={(e) => handleRegister(e)}>
                            Register
                            {show && <span><CircularProgress size="14px" thickness={7} /></span>}
                        </button>
                    )}

                {(type === 'login') ? (
                    <p className="box-message">
                        Don't have an account?
                        <Link to="/register">Register</Link>
                    </p>
                ) : (
                        <p className="box-message">
                            Already have an account?
                            <Link to="/login">Log-in</Link>
                        </p>
                    )}
            </form>

        </div>
    )
}

export default Auth

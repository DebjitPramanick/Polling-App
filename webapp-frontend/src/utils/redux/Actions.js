import { ADD_ERROR, REMOVE_ERROR, SET_CURRENT_USER } from "./Constants"
import axios from "../Axios"

export const addError = error => {
    return {
        type: ADD_ERROR,
        error
    }
}

export const removeError = () => {
    return {
        type: REMOVE_ERROR
    }
}

export const setCurrentUser = user => ({
    type: SET_CURRENT_USER,
    user
})

export const setToken = token => {
    axios.setToken(token)
}

export const logout = () =>{
    return dispatch => {
        localStorage.clear()
        axios.setToken(null)
        dispatch(setCurrentUser({}))
        dispatch(removeError())
    }
}

export const authUser = (data) =>{
    return async dispatch =>{
        try {
            const res = await axios.instance.post('/auth/login',data)
            const user = res.data
            localStorage.setItem('jwttoken', user.token)
            axios.setToken(user.token)
            dispatch(setCurrentUser(user))
            dispatch(removeError())
            console.log(`User logged in - ${user.username}`)

        } catch (err) {
            const error = err.response.data
            dispatch(addError(error))
        }
    }
}
import { ADD_ERROR, REMOVE_ERROR, SET_CURRENT_POLL, SET_CURRENT_USER, SET_POLLS, SET_USER_POLLS } from "./Constants"
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
            console.log(res)
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

export const registerUser = (data) => {
    return async dispatch => {
        try {
            const res = await axios.instance.post('/auth/register', data)
            console.log(res)
            const user = res.data
            localStorage.setItem('jwttoken', user.token)
            axios.setToken(user.token)
            dispatch(setCurrentUser(user))
            dispatch(removeError())
            console.log(`User registered - ${user.username}`)

        } catch (err) {
            const error = err.response.data
            dispatch(addError(error))
        }
    }
}




// Actions for Polls


export const setPolls = polls => ({
    type: SET_POLLS,
    polls
})

export const setUserPolls = polls => ({
    type: SET_USER_POLLS,
    polls
})

export const setCurPoll = poll => ({
    type: SET_CURRENT_POLL,
    poll
})

export const getPolls = () => {
    return async dispatch => {
        try {
            const res = await axios.instance.get('/polls')
            const polls = res.data
            dispatch(setPolls(polls))
            dispatch(removeError())
        } catch (error) {
            dispatch(addError(error.message))
        }
    }
}


export const getUserPolls = () => {
    return async dispatch => {
        try {
            const token = localStorage.jwttoken
            const res = await axios.instance.get('/polls/user', {
                headers: {
                    Authorization: `Bearer ${token}`,
                }})
            console.log(res)
            const polls = res.data
            dispatch(setUserPolls(polls))
            dispatch(removeError())
        } catch (error) {
            dispatch(addError(error.message))
        }
    }
}


export const createPoll = (data) => {
    return async dispatch => {
        try {
            const token = localStorage.jwttoken
            const poll = axios.instance.post('/polls/create', data, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            })
            dispatch(setCurPoll(poll))
            dispatch(removeError())
        } catch (error) {
            const err = error.response.data;
            dispatch(addError(error.message))
        }
    }
}

export const deletePoll = (id) => {
    return async dispatch => {
        try {
            const token = localStorage.jwttoken
            const poll = axios.instance.delete(`/polls/delete/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            })
            dispatch(setCurPoll(poll))
            dispatch(removeError())
        } catch (error) {
            const err = error.response.data;
            dispatch(addError(error.message))
        }
    }
}



export const getCurPoll = (id) => {
    return async dispatch => {
        try {
            const poll = axios.instance.get(`/polls/${id}`)
            dispatch(setCurPoll(poll))
            dispatch(removeError())
        } catch (error) {
            const err = error.response.data;
            dispatch(addError(error.message))
        }
    }
}

export const vote = (id, data) =>{
    return async dispatch => {
        try {
            const token = localStorage.jwttoken
            const poll = axios.instance.post(`/polls/vote/${id}`, data, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            })
            dispatch(setCurPoll(poll))
            dispatch(removeError())
        } catch (error) {
            const err = error.response.data;
            dispatch(addError(error.message))
        }
    }
}
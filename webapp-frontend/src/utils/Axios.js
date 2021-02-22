import axios from 'axios'


const setToken = (token) =>{
    if(token){
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    }
    else{
        delete axios.defaults.headers.common['Authorization']
    }
}


const instance = axios.create({
    baseURL: 'http://localhost:8000/api'
})

export default {instance, setToken}
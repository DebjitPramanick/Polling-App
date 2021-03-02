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
    baseURL: 'https://polling-app-2021.herokuapp.com/api'
})

export default {instance, setToken}
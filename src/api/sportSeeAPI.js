import axios from 'axios'
import {
    userId
} from '../cfg'

// Creating this file will allow us to reduce code,
// we don’t have to type the whole URL request for 
// each Axios request method.

export default axios.create({
    baseURL: "http://localhost:3000",
    // baseURL2: `http://localhost:3000/user/${userId}/average-sessions`,

})
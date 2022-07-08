import axios from 'axios'

// Creating this file will allow us to reduce code,
// we don’t have to type the whole URL request for 
// each Axios request method.

export default axios.create({
    baseURL: "http://localhost:3001",
})
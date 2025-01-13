import axios from 'axios'


export const resourceApi = axios.create({
    baseURL:process.env.REACT_BASE_URL
    
})

// INTERCEPTOR
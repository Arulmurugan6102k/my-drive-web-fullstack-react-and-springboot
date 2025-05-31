import axios from "axios";

const API = axios.create({
    baseURL : import.meta.env.REACT_APP_SPRING_API_URL || 'http://localhost:8000/api',
    headers : {
        'Content-Type' : 'application/json',
    },
});

export default API;
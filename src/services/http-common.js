import axios from 'axios'

export default axios.create({
    // const API_URL = 'https://localhost:5001/api'
    // 'https://offirent.azurewebsites.net/api'
    baseURL: 'https://offirent.azurewebsites.net/api',
    headers: {
        'Content-type': 'application/json',
    }
});

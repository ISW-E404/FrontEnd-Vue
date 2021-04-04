import axios from 'axios'

export default axios.create({
    baseURL: 'https://offirent.azurewebsites.net/api',
    headers: {
        'Content-type': 'application/json',
    }
});

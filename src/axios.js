import axios from "axios"

const instance = axios.create({
    baseUrl: 'http://localhost:5001/clone-7ec17/us-central1/api' //API URL CLOUD FUNCTION
});

export default instance;
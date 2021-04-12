import axios from "axios"

const instance = axios.create({
    baseUrl: '...' //API URL CLOUD FUNCTION
});

export default instance;
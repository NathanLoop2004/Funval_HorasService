import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://www.hs-service.api.crealape.com/api/v1/',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
});
const success = (response) => response;
const error = (error) => {
    const status = error?.response?.status;

    if (status === 401) {
        window.location.href = '/login'
    }
    if (status === 403) {
        window.location.href = '/forbidden'
    }
    return Promise.reject(error);
}
instance.interceptors.response.use(success, error);
import axios from "axios";
import sha1 from "crypto-js/sha1";

const API_KEY = "BSF8RLDX4MB7XVEQKR3D";
const API_SECRET = "WVf3ENMTwZcS8d#vwxcv3tubJKwxUzxhupuyU8h3";

const podcastApi = axios.create({
    baseURL: "https://api.podcastindex.org/api/1.0",
});

podcastApi.interceptors.request.use((config) => {
    const now = Math.floor(Date.now() / 1000);
    const dataToHash = API_KEY + API_SECRET + now;
    const hash = sha1(dataToHash).toString();

    config.headers["X-Auth-Date"] = now;
    config.headers["X-Auth-Key"] = API_KEY;
    config.headers["Authorization"] = hash;
    config.headers["Content-Type"] = "application/json";

    return config;
});

export default podcastApi;

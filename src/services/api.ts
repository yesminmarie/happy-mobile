import axios from 'axios';
import { APP_URL } from 'react-native-dotenv';

const api = axios.create({
    baseURL: `${APP_URL}:3333`,
});

export default api;
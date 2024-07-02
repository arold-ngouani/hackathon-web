// src/services/api.js
import axios from 'axios';

const api = axios.create({
    baseURL: 'https://votre-api-url.com', // URL de de l'API
});

export default api;

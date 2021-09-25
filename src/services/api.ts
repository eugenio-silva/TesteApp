import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://hmg-dev-brf-backend.profitmais.com.br/region/list'
});


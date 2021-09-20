import axios from 'axios';

const api = axios.create({
  baseURL: 'https://dev.database.freelajobs.com.br',
  // baseURL: 'https://database.freelajobs.com.br',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
});

export default api;

// Digio 08003338734 - 30038734
// Protocolo - 20210908327138

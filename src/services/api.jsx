import axios from 'axios';

const api = axios.create({
    baseURL: 'https://localhost:7134',
    headers: {
    "Content-Type": "application/json",
  },
})

export default api
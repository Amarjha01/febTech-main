import axios from 'axios';

const GlobalAxios = axios.create({
  // baseURL: 'https://febtech-backend.onrender.com/api',
  baseURL: 'https://api.febtech.in/api/v1', // Replace with your base URL
});

export default GlobalAxios;

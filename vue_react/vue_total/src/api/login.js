// src/api/login.js
import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

export const login = async (username, password, captcha) => {
  try {
    const response = await axios.post(`${API_URL}/login`, {
      username,
      password,
      captcha,
    });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};

export const getCaptcha = async () => {
  try {
    const response = await axios.get(`${API_URL}/captcha`);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};
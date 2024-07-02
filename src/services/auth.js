import { jwtDecode } from 'jwt-decode';
import axios from 'axios';

export const authenticateWithToken = async (token) => {
  const user = jwtDecode(token);
  localStorage.setItem('token', token);
  return user;
};

export const validateCode = async (code) => {
  const response = await axios.post('https://hackathon-api-3cw7.onrender.com/auth/validate_code', { code });
  const { user, token } = response.data;
  localStorage.setItem('token', token);
  return user;
};

export const logout = () => {
  localStorage.removeItem('token');
};

export const getCurrentUser = () => {
  try {
    const token = localStorage.getItem('token');
    if (token) {
      return jwtDecode(token);
    }
  } catch (error) {
    return null;
  }
  return null;
};
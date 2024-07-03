import axios from 'axios';

const API_BASE_URL = 'https://hackathon-api-3cw7.onrender.com/auth';

export const readNfcToken = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/read_nfc`);
    return response.data;
  } catch (error) {
    console.error('Failed to read NFC token:', error);
    throw error;
  }
};

export const validateCode = async (code) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/validate_code`, { code });
    return response.data;
  } catch (error) {
    console.error('Failed to validate code:', error);
    throw error;
  }
};

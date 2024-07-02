import { jwtDecode } from 'jwt-decode';


export const authenticateWithToken = async (token) => {
  // Ici, nous devons simuler ou faire une requête à une API pour authentifier l'utilisateur.
  // Pour simplifier, nous allons juste décoder le token.

  const user = jwtDecode(token);
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

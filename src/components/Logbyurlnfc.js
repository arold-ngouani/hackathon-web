import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const Logbyurlnfc = () => {
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const query = useQuery();
    const token = query.get('token');
    useEffect(() => {
        const check = async () => {
            
            if (token && token.trim() !== '') {
                try {
                    const response = await axios.post('https://hackathon-api-3cw7.onrender.com/auth/auth_by_token', { token });
                    console.log(response);
                    localStorage.setItem('token', response.data.access_token);
                    navigate('/dashboard');
                } catch (err) {
                    if (err.response && err.response.status === 401) {
                        setError('Code incorrect. Veuillez vérifier votre code.');
                    } else {
                        setError('Erreur lors de la validation. Veuillez réessayer.');
                    }
                }
            } else {
                setError('Token non fourni ou vide.');
            }
        };

        check();
    }, [token, navigate]);

    return (
        <div>
            <p>Connexion en cours</p>
            {error && <p>{error}</p>}
        </div>
    );
};

export default Logbyurlnfc;

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode'; 

const useAuth = () => {
  const [user, setUser] = useState(null); 
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      navigate('/login');
      return;
    } else {
      try {
        const decodedToken = jwtDecode(token);
        
        const currentTime = Date.now() / 1000;
        if (decodedToken.exp < currentTime) {
          localStorage.removeItem('token');
          navigate('/login');
        } else {
          setUser(decodedToken);
        }
      } catch (error) {
        console.error('Token invalid:', error);
        localStorage.removeItem('token');
        navigate('/login');
      }
    }

    setLoading(false);
  }, [navigate]);

  return { user, loading };
};

export default useAuth;

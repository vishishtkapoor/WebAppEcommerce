import { useNavigate } from 'react-router-dom';
import { useStore } from '../store/useStore';

export const useAuth = () => {
  const { user, setUser } = useStore();
  const navigate = useNavigate();

  const login = (username: string, password: string) => {
    if (username === 'admin' && password === '123456') {
      setUser({ username: 'admin', isAdmin: true });
      navigate('/admin');
      return true;
    } else if (username) {
      setUser({ username, isAdmin: false });
      navigate('/');
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    navigate('/');
  };

  return { user, login, logout };
};
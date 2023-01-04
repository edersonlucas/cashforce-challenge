import {
  createContext, ReactNode, useEffect, useState, useMemo, useCallback,
} from 'react';
import { setCookie, parseCookies, destroyCookie } from 'nookies';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

interface IProps {
  children: ReactNode;
}

interface ILogin {
  email: string;
}

interface IAuthentication {
  isAuthenticated: boolean;
  login: (loginData: ILogin) => Promise<void>
  logout: () => void;
}

export const AuthContext = createContext({} as IAuthentication);

export function AuthProvider({ children }: IProps) {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const { 'cashforce.token': token } = parseCookies();
    setIsAuthenticated(!!token);
  }, []);

  const oneDay = 60 * 60 * 24;

  const login = useCallback(async ({ email }: ILogin) => {
    await api.post('/login', { email }).then((response) => {
      setCookie(undefined, 'cashforce.token', response.data.token, {
        maxAge: oneDay,
      });
      const { data: { token } } = response;
      setIsAuthenticated(!!token);
      toast.success('Login efetuado com sucesso!');
      navigate('/');
    }).catch((err) => {
      toast.error('Usuário inválido.');
    });
  }, [oneDay, navigate]);

  const logout = useCallback(() => {
    destroyCookie(undefined, 'cashforce.token');
    setIsAuthenticated(false);
    navigate('/login');
  }, [navigate]);

  const value = useMemo(() => ({
    isAuthenticated, login, logout,
  }), [isAuthenticated, login, logout]);

  return (
    <AuthContext.Provider value={value}>
      { children }
    </AuthContext.Provider>
  );
}
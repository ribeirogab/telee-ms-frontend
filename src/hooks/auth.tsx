import React, { createContext, useState, useCallback, useContext } from 'react';
import { History } from 'history';

import api from '../services/api';

interface User {
  username: string;
  name: string;
  permission: 'writer' | 'editor' | 'administrator' | 'developer';
}

interface AuthState {
  token: string;
  user: User;
}

interface SignInCredentials {
  username: string;
  password: string;
}

interface AuthContextData {
  user: User;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(history: History<History.PoorMansUnknown>): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(
    (): AuthState => {
      const token = localStorage.getItem('@teleems:token');
      const user = localStorage.getItem('@teleems:user');

      if (token && user) {
        return { token, user: JSON.parse(user) };
      }

      return {} as AuthState;
    },
  );

  const signIn = useCallback(async ({ username, password }) => {
    const response = await api.post('/sessions', { username, password });
    const { token, user } = response.data;

    localStorage.setItem('@teleems:token', token);
    localStorage.setItem(
      '@teleems:user',
      JSON.stringify({
        username: user.username,
        name: user.name,
        permission: user.permission,
      }),
    );

    setData({ token, user });
  }, []);

  const signOut = useCallback(history => {
    localStorage.removeItem('@teleems:token');
    localStorage.removeItem('@teleems:user');

    setData({} as AuthState);
    history.push('/');
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };

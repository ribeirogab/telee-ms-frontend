import React, { useState } from 'react';

import { Container } from './styles';

import api from '../../services/api';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>,
  ): Promise<void> {
    e.preventDefault();
    const { data } = await api.post('/sessions', { username, password });
    localStorage.setItem('token', data.token);
  }

  return (
    <Container>
      <form onSubmit={e => handleSubmit(e)}>
        <h1>Telee MS</h1>
        <input
          type="text"
          placeholder="Usuário"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button type="submit">Entrar</button>
      </form>
    </Container>
  );
};

export default Login;

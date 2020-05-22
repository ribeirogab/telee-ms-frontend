import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { FiUser, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import logo from '../../assets/logo.png';

import { Container, Content, Background } from './styles';

import Button from '../../components/Button';
import Input from '../../components/Input';

import api from '../../services/api';

interface Submit {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: Submit): Promise<void> => {
      try {
        const schema = Yup.object().shape({
          username: Yup.string().required('Usuário obrigatório'),
          password: Yup.string().min(3, 'No mínimo 3 digitos'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const response = await api.post('/sessions', data);
        localStorage.setItem('token', response.data.token);
        history.push('/dashboard');
      } catch (error) {
        console.log(error);
      }
    },
    [history],
  );

  return (
    <Container>
      <Content>
        <img src={logo} alt="Logo" />

        <Form onSubmit={handleSubmit}>
          <h1>Faça seu logon</h1>

          <Input name="username" icon={FiUser} placeholder="Usuário" required />
          <Input name="password" icon={FiLock} placeholder="Senha" required />

          <Button type="submit">Entrar</Button>

          <a href="forgot">Esqueci minha senha</a>
        </Form>
      </Content>

      <Background />
    </Container>
  );
};

export default Login;

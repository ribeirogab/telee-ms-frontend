import React, { useCallback, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FiUser, FiLock, FiAlertCircle } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import logo from '../../assets/logo.png';

import { Container, Content, Background, ErrorLogin } from './styles';

import Button from '../../components/Button';
import Input from '../../components/Input';
import Loader from '../../components/Loader';

import getValidationErrors from '../../utils/getValidationErrors';

import api from '../../services/api';

interface Submit {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();

  const [errorLogin, setErrorLogin] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = useCallback(
    async (data: Submit): Promise<void> => {
      try {
        setErrorLogin(false);
        setLoading(true);
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          username: Yup.string().required('Usuário obrigatório'),
          password: Yup.string().required('Senha obrigatória'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const response = await api.post('/sessions', data);
        localStorage.setItem('token', response.data.token);
        history.push('/dashboard');
      } catch (err) {
        setLoading(false);
        if (err.name === 'ValidationError') {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
        } else setErrorLogin(true);
      }
    },
    [history],
  );

  return (
    <Container>
      {loading && <Loader />}
      <Content>
        <img src={logo} alt="Logo" />

        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Faça seu logon</h1>

          <Input name="username" icon={FiUser} placeholder="Usuário" />
          <Input
            name="password"
            type="password"
            icon={FiLock}
            placeholder="Senha"
          />

          <Button type="submit">Entrar</Button>

          <ErrorLogin error={errorLogin}>
            <FiAlertCircle size={20} /> Usuário ou senha incorreto(s).
          </ErrorLogin>
          {/* <a href="forgot">Esqueci minha senha</a> */}
        </Form>
      </Content>

      <Background />
    </Container>
  );
};

export default Login;

import React, { useState, useCallback, useEffect, useRef } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import {
  FiXCircle,
  FiType,
  FiUser,
  FiCheckCircle,
  FiAlertCircle,
} from 'react-icons/fi';
import { Container, CloseButton, ErrorLoading } from './styles';

import Input from '../../../components/Input';
import Loader from '../../../components/Loader';

import toCapitalize from '../../../utils/toCapitalize';
import api from '../../../services/api';

interface ModalInfoProps {
  setOpen: Function;
  userId: string;
}

const ModalInfo = ({ setOpen, userId }: ModalInfoProps): JSX.Element => {
  const formRef = useRef<FormHandles>(null);
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [permission, setPermission] = useState('');
  const [errorLoading, setErrorLoading] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = useCallback(() => {
    console.log(''); // eslint-disable-line
  }, []);

  const handleCloseModal = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  useEffect(() => {
    async function getUserData(): Promise<void> {
      try {
        setErrorLoading(false);
        setLoading(true);

        const { data: user } = await api.get(`/users/${userId}`, {
          headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });

        setUsername(user.username);
        setName(user.name);
        setPermission(user.permission);
        setLoading(false);
      } catch (error) {
        setErrorLoading(true);
      }
    }

    getUserData();
  }, [userId]);

  return (
    <>
      {loading && <Loader />}
      <Container>
        <div>
          <CloseButton onClick={handleCloseModal}>
            <FiXCircle size={25} />
          </CloseButton>
          <h2>Detalhes do usuário</h2>
        </div>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input
            name="name"
            placeholder="Nome"
            icon={FiType}
            value={toCapitalize(name)}
            disabled
          />
          <Input
            name="username"
            placeholder="Usuário (exemplo: joao.silva)"
            icon={FiUser}
            value={username}
            disabled
          />
          <Input
            name="permission"
            placeholder="Permissão"
            icon={FiCheckCircle}
            value={toCapitalize(permission)}
            disabled
          />
        </Form>
        <ErrorLoading error={errorLoading}>
          <FiAlertCircle size={20} /> Erro ao carregar usuário
        </ErrorLoading>
      </Container>
    </>
  );
};

export default ModalInfo;

import React, { useState, useCallback, useRef } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import {
  FiXCircle,
  FiType,
  FiUser,
  FiCheckCircle,
  FiLock,
} from 'react-icons/fi';

import { useToast } from '../../../hooks/toast';

import { Container, CloseButton } from './styles';

import Button from '../../../components/Button';
import Input from '../../../components/Input';
import Select from '../../../components/Select';
import Loader from '../../../components/Loader';

import getValidationErrors from '../../../utils/getValidationErrors';

import api from '../../../services/api';
import PermissionService from '../../../services/PermissionService';

interface Writer {
  id: string;
  name: string;
  username: string;
}

interface FormAddProps {
  setOpen: Function;
  users: Writer[];
  setUsers: Function;
}

interface SubmitFormData {
  name: string;
  username: string;
  permission: string;
  password: string;
}

const FormAdd = ({ setOpen, users, setUsers }: FormAddProps): JSX.Element => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleCloseModal = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const handleSubmit = useCallback(
    async (data: SubmitFormData) => {
      try {
        setLoading(true);

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
          username: Yup.string().required('Usuário obrigatória'),
          permission: Yup.string().required('Permissão obrigatória'),
          password: Yup.string().min(6, 'No mínimo 6 caracteres'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const { data: writer } = await api.post('/users', data, {
          headers: {
            authorization: `Bearer ${localStorage.getItem('@teleems:token')}`,
          },
        });

        setUsers([...users, writer]);
        handleCloseModal();
        addToast({
          type: 'success',
          title: 'Usuário cadastrado com sucesso',
        });
      } catch (err) {
        setLoading(false);
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
        } else {
          handleCloseModal();
          addToast({
            type: 'error',
            title: 'Erro ao cadastrar usuário',
            description:
              'Ocorreu um erro ao cadastrar usuário, tente novamente mais tarde.',
          });
        }
      }
    },
    [handleCloseModal, setUsers, users, addToast],
  );

  return (
    <>
      {loading && <Loader />}
      <Container>
        <div>
          <CloseButton onClick={handleCloseModal}>
            <FiXCircle size={25} />
          </CloseButton>
          <h2>Adicionar Usuário</h2>
        </div>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input name="name" placeholder="Nome" icon={FiType} />
          <Input
            name="username"
            placeholder="Usuário (exemplo: joao.silva)"
            icon={FiUser}
          />
          <Select name="permission" icon={FiCheckCircle}>
            <option value="">Selecione uma permissão...</option>
            {PermissionService(['editor', 'administrator', 'developer']) && (
              <option value="writer">Redator</option>
            )}
            {PermissionService(['editor', 'administrator', 'developer']) && (
              <option value="editor">Auditor</option>
            )}
            {PermissionService(['administrator', 'developer']) && (
              <option value="administrator">Administrador</option>
            )}
          </Select>
          <Input
            name="password"
            type="password"
            placeholder="Senha"
            icon={FiLock}
          />

          <Button type="submit">Cadastrar</Button>
        </Form>
      </Container>
    </>
  );
};

export default FormAdd;

import React, { useCallback, useRef, useState, useEffect } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import {
  FiAlertCircle,
  FiType,
  FiAlignLeft,
  FiGitCommit,
} from 'react-icons/fi';

import Button from '../../../components/Button';
import Input from '../../../components/Input';
import Loader from '../../../components/Loader';

import { Container, ButtonContainer, ErrorLogin } from './styles';

import getValidationErrors from '../../../utils/getValidationErrors';

import api from '../../../services/api';

interface Update {
  id: string;
  title: string;
  version: string;
  description: string;
  created_at: string;
  updated_at: string;
}

interface FormEditUpdatesProps {
  id: string;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  updates: Update[];
  setUpdates: React.Dispatch<React.SetStateAction<Update[]>>;
}

const FormEditUpdate: React.FC<FormEditUpdatesProps> = ({
  id,
  setOpen,
  updates,
  setUpdates,
}) => {
  const formRef = useRef<FormHandles>(null);

  const [errorLogin, setErrorLogin] = useState(false);
  const [loading, setLoading] = useState(false);
  const [defaultValue, setDefaultValue] = useState<Update>({} as Update);

  useEffect(() => {
    api
      .get(`/updates/${id}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem('@teleems:token')}`,
        },
      })
      .then(response => setDefaultValue(response.data));
  }, [setDefaultValue, id]);

  const handleSubmit = useCallback(
    async (data: Update): Promise<void> => {
      try {
        setErrorLogin(false);
        setLoading(true);
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          title: Yup.string().required('Título obrigatório'),
          description: Yup.string().required('Descrição obrigatória'),
          version: Yup.string().required('Versão obrigatória'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const response = await api.put(`/updates/${id}`, data, {
          headers: {
            authorization: `Bearer ${localStorage.getItem('@teleems:token')}`,
          },
        });

        setUpdates(
          updates.map(update => {
            if (update.id === response.data.id) return response.data;
            return update;
          }),
        );

        setLoading(false);
        setOpen(false);
      } catch (err) {
        setLoading(false);
        if (err.name === 'ValidationError') {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
        } else setErrorLogin(true);
      }
    },
    [setOpen, setUpdates, updates, id],
  );

  const handleCloseEditUpdateModal = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  return (
    <>
      {loading && <Loader />}
      <Container>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Editar update</h1>

          <Input
            name="title"
            icon={FiType}
            placeholder="Título"
            defaultValue={defaultValue.title}
          />
          <Input
            name="description"
            icon={FiAlignLeft}
            placeholder="Descrição"
            defaultValue={defaultValue.description}
          />
          <Input
            name="version"
            icon={FiGitCommit}
            placeholder="Versão"
            defaultValue={defaultValue.version}
          />

          <ButtonContainer>
            <Button type="submit">Cadastrar</Button>
            <Button
              type="button"
              className="btn-cancel"
              onClick={handleCloseEditUpdateModal}
            >
              Cancelar
            </Button>
          </ButtonContainer>

          <ErrorLogin error={errorLogin}>
            <FiAlertCircle size={20} /> Alguma informação está incorreta.
          </ErrorLogin>
          {/* <a href="forgot">Esqueci minha senha</a> */}
        </Form>
      </Container>
    </>
  );
};

export default FormEditUpdate;

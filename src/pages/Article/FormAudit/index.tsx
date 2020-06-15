import React, { useState, useRef, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import { FiClipboard, FiAlertCircle, FiXCircle } from 'react-icons/fi';

import { useToast } from '../../../hooks/toast';

import { Container, CloseButton, ErrorAudit } from './styles';

import Button from '../../../components/Button';
import Select from '../../../components/Select';
import Loader from '../../../components/Loader';

import getValidationErrors from '../../../utils/getValidationErrors';
import api from '../../../services/api';

interface Task {
  id: string;
  keyword: string;
  sub_keywords: string;
  website: string;
  created_at: string;
}

interface FormAuditProps {
  setOpen: Function;
  taskId: string | undefined;
}

interface SubmitFormData {
  status: 'returned' | 'okay' | 'refused';
}

const FormAudit = ({ setOpen, taskId }: FormAuditProps): JSX.Element => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();
  const { addToast } = useToast();
  const [errorAudit, setErrorAudit] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleCloseModal = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const handleSubmit = useCallback(
    async (data: SubmitFormData) => {
      try {
        setErrorAudit(false);
        setLoading(true);

        const schema = Yup.object().shape({
          status: Yup.string().required('Status obrigatório'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.patch(`/tasks/${taskId}`, data, {
          headers: {
            authorization: `Bearer ${localStorage.getItem('@teleems:token')}`,
          },
        });

        handleCloseModal();

        addToast({
          type: 'success',
          title: 'Artigo auditado com sucesso',
        });

        history.push('/auditoria');
      } catch (err) {
        setLoading(false);
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
        } else {
          addToast({
            type: 'error',
            title: 'Erro ao auditar artigo',
            description: 'Ocorreu um erro, tente novamente mais tarde.',
          });
        }
      }
    },
    [handleCloseModal, history, taskId, addToast],
  );

  return (
    <>
      {loading && <Loader />}
      <Container>
        <div>
          <CloseButton onClick={handleCloseModal}>
            <FiXCircle size={25} />
          </CloseButton>
          <h2>Auditoria</h2>
        </div>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Select name="status" icon={FiClipboard}>
            <option value="returned">Retornar</option>
            <option value="okay">Aprovar</option>
            <option value="refused">Recusar</option>
          </Select>
          <Button type="submit">Confirmar</Button>
        </Form>
        <ErrorAudit error={errorAudit}>
          <FiAlertCircle size={20} /> Erro ao auditar tarefa
        </ErrorAudit>
      </Container>
    </>
  );
};

export default FormAudit;

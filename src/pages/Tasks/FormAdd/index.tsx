import React, { useState, useCallback, useRef } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import { FiAperture, FiKey, FiList, FiXCircle } from 'react-icons/fi';

import { Container, CloseButton } from './styles';

import { useToast } from '../../../hooks/toast';

import Button from '../../../components/Button';
import Input from '../../../components/Input';
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

interface FormAddProps {
  setOpen: Function;
  tasks: Task[];
  setTasks: Function;
}

interface SubmitFormData {
  keyword: string;
  website: string;
  subKeyword?: string;
}

const FormAdd = ({ setOpen, tasks, setTasks }: FormAddProps): JSX.Element => {
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
          keyword: Yup.string().required('Palavra-chave obrigatória'),
          website: Yup.string().required('Site obrigatório'),
          subKeywords: Yup.string(),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const { data: task } = await api.post('/tasks', data, {
          headers: {
            authorization: `Bearer ${localStorage.getItem('@teleems:token')}`,
          },
        });

        setTasks([...tasks, task]);
        handleCloseModal();
        addToast({
          type: 'success',
          title: 'Tarefa cadastrada com sucesso',
        });
      } catch (err) {
        setLoading(false);
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
        } else {
          addToast({
            type: 'error',
            title: 'Erro ao cadastrar tarefa',
            description:
              'Ocorreu um erro ao cadastrar tarefa, tente novamente mais tarde.',
          });
        }
      }
    },
    [handleCloseModal, setTasks, tasks, addToast],
  );

  return (
    <>
      {loading && <Loader />}
      <Container>
        <div>
          <CloseButton onClick={handleCloseModal}>
            <FiXCircle size={25} />
          </CloseButton>
          <h2>Adicionar Tarefa</h2>
        </div>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input placeholder="Palavra-chave" name="keyword" icon={FiKey} />
          <Select name="website" icon={FiAperture}>
            <option value="">Selecione um site...</option>
            <option value="skycombotv.com.br">skycombotv.com.br</option>
            <option value="assinesky.com.br">assinesky.com.br</option>
            <option value="planoskytv.com.br">planoskytv.com.br</option>
            <option value="telefonesky.com.br">telefonesky.com.br</option>
            <option value="skytvinternetbandalarga.com.br">
              skytvinternetbandalarga.com.br
            </option>
            <option value="assineskytv.com.br">assineskytv.com.br</option>
            <option value="skycombo.com.br">skycombo.com.br</option>
            <option value="comboskytv.com.br">comboskytv.com.br</option>
            <option value="numerodasky.com.br">numerodasky.com.br</option>
          </Select>

          <Input
            placeholder="Palavras-chave secundárias"
            name="subKeywords"
            icon={FiList}
          />
          <Button type="submit">Cadastrar</Button>
        </Form>
      </Container>
    </>
  );
};

export default FormAdd;

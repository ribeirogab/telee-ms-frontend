import React, { useState, useCallback, useRef, useEffect } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import {
  FiAperture,
  FiKey,
  FiList,
  FiXCircle,
  FiAlertCircle,
} from 'react-icons/fi';

import { Container, CloseButton, ErrorLoading } from './styles';

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
  taskId: string;
  tasks: Task[];
  setTasks: Function;
}

interface SubmitFormData {
  keyword: string;
  website: string;
  subKeywords?: string;
}

const FormAdd = ({
  setOpen,
  taskId,
  tasks,
  setTasks,
}: FormAddProps): JSX.Element => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const [keyword, setKeyword] = useState('');
  const [website, setWebsite] = useState('');
  const [subKeywords, setSubKeywords] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorLoading, setErrorLoading] = useState(false);

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

        const { data: editedTask } = await api.put(`/tasks/${taskId}`, data, {
          headers: {
            authorization: `Bearer ${localStorage.getItem('@teleems:token')}`,
          },
        });

        setTasks(
          tasks.map(task => {
            if (task.id === editedTask.id) return editedTask;
            return task;
          }),
        );
        handleCloseModal();
        addToast({
          type: 'success',
          title: 'Tarefa editada com sucesso',
        });
      } catch (err) {
        setLoading(false);
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
        } else setErrorLoading(true);
      }
    },
    [handleCloseModal, setTasks, tasks, addToast, taskId],
  );

  useEffect(() => {
    async function getTaskData(): Promise<void> {
      try {
        setLoading(true);

        const { data: task } = await api.get(`/tasks/${taskId}`, {
          headers: {
            authorization: `Bearer ${localStorage.getItem('@teleems:token')}`,
          },
        });

        setKeyword(task.keyword);
        setWebsite(task.website);
        setSubKeywords(task.sub_keywords);
        setLoading(false);
      } catch (error) {
        addToast({
          type: 'error',
          title: 'Erro ao carregar tarefa',
          description:
            'Ocorreu um erro ao carregar esta tarefa, tente novamente mais tarde.',
        });
      }
    }

    getTaskData();
  }, [taskId, addToast, handleCloseModal]);

  return (
    <Container>
      <div>
        <CloseButton onClick={handleCloseModal}>
          <FiXCircle size={25} />
        </CloseButton>
        <h2>Editar Tarefa</h2>
      </div>
      {loading ? (
        <Loader />
      ) : (
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input
            placeholder="Palavra-chave"
            name="keyword"
            icon={FiKey}
            defaultValue={keyword}
          />
          <Select name="website" icon={FiAperture} defaultValue={website}>
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
            defaultValue={subKeywords}
          />
          <Button type="submit">Cadastrar</Button>
        </Form>
      )}

      <ErrorLoading error={errorLoading}>
        <FiAlertCircle size={20} /> Erro ao carregar tarefa
      </ErrorLoading>
    </Container>
  );
};

export default FormAdd;

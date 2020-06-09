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

import { Container, CloseButton, ErrorEdit } from './styles';

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

  const [errorEdit, setErrorEdit] = useState(false);
  const [loading, setLoading] = useState(false);
  const [keyword, setKeyword] = useState('');
  const [website, setWebsite] = useState('');
  const [subKeywords, setSubKeywords] = useState('');

  const handleCloseModal = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const handleSubmit = useCallback(
    async (data: SubmitFormData) => {
      try {
        setErrorEdit(false);
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
      } catch (err) {
        setLoading(false);
        if (err.name === 'ValidationError') {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
        } else setErrorEdit(true);
      }
    },
    [handleCloseModal, setTasks, tasks],
  );

  useEffect(() => {
    async function getTaskData(): Promise<void> {
      try {
        setErrorEdit(false);
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
        setErrorEdit(true);
      }
    }

    getTaskData();
  }, [taskId]);

  return (
    <>
      {loading && <Loader />}
      <Container>
        <div>
          <CloseButton onClick={handleCloseModal}>
            <FiXCircle size={25} />
          </CloseButton>
          <h2>Editar Tarefa</h2>
        </div>
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

        <ErrorEdit error={errorEdit}>
          <FiAlertCircle size={20} /> Erro ao editar tarefa
        </ErrorEdit>
      </Container>
    </>
  );
};

export default FormAdd;

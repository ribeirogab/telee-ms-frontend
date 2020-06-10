import React, { useState, useCallback, useRef, useEffect } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import {
  FiAperture,
  FiKey,
  FiList,
  FiXCircle,
  FiAlertCircle,
} from 'react-icons/fi';

import { Container, CloseButton, ErrorLoading } from './styles';

import Input from '../../../components/Input';
import Loader from '../../../components/Loader';

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
}

interface SubmitFormData {
  keyword: string;
  website: string;
  subKeywords?: string;
}

const FormAdd = ({ setOpen, taskId }: FormAddProps): JSX.Element => {
  const formRef = useRef<FormHandles>(null);

  const [errorLoading, setErrorLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [keyword, setKeyword] = useState('');
  const [website, setWebsite] = useState('');
  const [subKeywords, setSubKeywords] = useState('');

  const handleCloseModal = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const handleSubmit = useCallback(() => {
    console.log(''); // eslint-disable-line
  }, []);

  useEffect(() => {
    async function getTaskData(): Promise<void> {
      try {
        setErrorLoading(false);
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
        setErrorLoading(true);
      }
    }

    getTaskData();
  }, [taskId]);

  return (
    <Container>
      <div>
        <CloseButton onClick={handleCloseModal}>
          <FiXCircle size={25} />
        </CloseButton>
        <h2>Detalhes da Tarefa</h2>
      </div>

      {loading ? (
        <Loader />
      ) : (
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input
            placeholder="Palavra-chave"
            name="keyword"
            icon={FiKey}
            value={keyword}
            disabled
          />

          <Input
            placeholder="Website"
            name="website"
            icon={FiAperture}
            value={website}
            disabled
          />

          <Input
            placeholder="Palavras-chave secundárias"
            name="subKeywords"
            icon={FiList}
            value={subKeywords}
            disabled
          />
        </Form>
      )}

      <ErrorLoading error={errorLoading}>
        <FiAlertCircle size={20} /> Erro ao carregar tarefa
      </ErrorLoading>
    </Container>
  );
};

export default FormAdd;

import React, { useState } from 'react';

import TextField from '@material-ui/core/TextField';

import {
  ContainerForm,
  InputGroup,
  ButtonGroup,
} from '../../../components/StandardFormElements';

import api from '../../../services/api';

interface Task {
  id: string;
  keyword: string;
  sub_keywords: string;
  website: string;
  created_at: string;
}

interface FormAddProps {
  setOpen?: Function;
  tasks: Task[];
  setTasks: Function;
}
const FormAdd = ({ setOpen, tasks, setTasks }: FormAddProps): JSX.Element => {
  const [keyword, setKeyword] = useState('');
  const [website, setWebsite] = useState('');
  const [subKeywords, setSubKeywords] = useState('');

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    const { data } = await api.post(
      '/tasks',
      { keyword, website, subKeywords },
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      },
    );

    setTasks([...tasks, data]);

    if (setOpen) setOpen(false);
  }

  function handleClose(): void {
    if (setOpen) setOpen(false);
  }

  return (
    <ContainerForm>
      <form onSubmit={handleSubmit}>
        <h2>Adicionar Tarefa</h2>
        <InputGroup>
          <TextField
            required
            className="input"
            label="Palavra-chave"
            variant="outlined"
            value={keyword}
            onChange={e => setKeyword(e.target.value)}
          />
          <TextField
            className="input"
            required
            label="Site"
            variant="outlined"
            value={website}
            onChange={e => setWebsite(e.target.value)}
          />
        </InputGroup>
        <TextField
          required
          className="input"
          label="Palavra-chaves secundárias"
          variant="outlined"
          value={subKeywords}
          onChange={e => setSubKeywords(e.target.value)}
        />
        <ButtonGroup>
          <button type="button" onClick={handleClose}>
            Cancelar
          </button>
          <button type="submit">Adicionar</button>
        </ButtonGroup>
      </form>
    </ContainerForm>
  );
};

export default FormAdd;

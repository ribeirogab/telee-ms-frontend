import React, { useState, useEffect } from 'react';

import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

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

interface FormEditProps {
  setOpen?: Function;
  taskId: string;
  tasks: Task[];
  setTasks: Function;
}

const FormEdit = ({
  setOpen,
  taskId,
  tasks,
  setTasks,
}: FormEditProps): JSX.Element => {
  const [keyword, setKeyword] = useState('');
  const [website, setWebsite] = useState('');
  const [subKeywords, setSubKeywords] = useState('');

  useEffect(() => {
    api
      .get(`/tasks/${taskId}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then(response => {
        setKeyword(response.data.keyword);
        setWebsite(response.data.website);
        setSubKeywords(response.data.sub_keywords);
      });
  }, [taskId]);

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    const { data } = await api.put(
      `/tasks/${taskId}`,
      { keyword, website, subKeywords },
      {
        headers: { authorization: `Bearer ${localStorage.getItem('token')}` },
      },
    );

    setTasks(
      tasks.map(task => {
        if (task.id === taskId) return data;
        return task;
      }),
    );

    if (setOpen) setOpen(false);
  }

  function handleClose(): void {
    if (setOpen) setOpen(false);
  }

  return (
    <ContainerForm>
      <form onSubmit={handleSubmit}>
        <h2>Editar Tarefa</h2>
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
            required
            id="outlined-select-currency"
            select
            className="input"
            label="Site"
            value={website}
            onChange={e => setWebsite(e.target.value)}
            variant="outlined"
          >
            <MenuItem value="skycombotv.com.br">skycombotv.com.br</MenuItem>
            <MenuItem value="assinesky.com.br">assinesky.com.br</MenuItem>
            <MenuItem value="planoskytv.com.br">planoskytv.com.br</MenuItem>
            <MenuItem value="telefonesky.com.br">telefonesky.com.br</MenuItem>
            <MenuItem value="skytvinternetbandalarga.com.br">
              skytvinternetbandalarga.com.br
            </MenuItem>
            <MenuItem value="assineskytv.com.br">assineskytv.com.br</MenuItem>
            <MenuItem value="skycombo.com.br">skycombo.com.br</MenuItem>
            <MenuItem value="comboskytv.com.br">comboskytv.com.br</MenuItem>
            <MenuItem value="numerodasky.com.br">numerodasky.com.br</MenuItem>
          </TextField>
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
          <button type="submit">Salvar</button>
        </ButtonGroup>
      </form>
    </ContainerForm>
  );
};

export default FormEdit;

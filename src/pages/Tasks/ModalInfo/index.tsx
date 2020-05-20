import React, { useState, useEffect } from 'react';

import TextField from '@material-ui/core/TextField';

import {
  ContainerForm,
  InputGroup,
  ButtonGroup,
} from '../../../components/StandardFormElements';

import api from '../../../services/api';

interface ModalInfoProps {
  setOpen?: Function;
  taskId: string;
}

const ModalInfo = ({ setOpen, taskId }: ModalInfoProps): JSX.Element => {
  const [keyword, setKeyword] = useState('');
  const [website, setWebsite] = useState('');
  const [subKeywords, setSubKeywords] = useState('');

  function handleClose(): void {
    if (setOpen) setOpen(false);
  }

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

  return (
    <ContainerForm>
      <form>
        <h2>Detalhes da Tarefa</h2>
        <InputGroup>
          <TextField
            disabled
            className="input"
            label="Palavra-chave"
            variant="standard"
            value={keyword}
            onChange={e => setKeyword(e.target.value)}
          />
          <TextField
            className="input"
            disabled
            label="Site"
            variant="standard"
            value={website}
            onChange={e => setWebsite(e.target.value)}
          />
        </InputGroup>
        <TextField
          disabled
          className="input"
          label="Palavra-chaves secundárias"
          variant="standard"
          value={subKeywords}
          onChange={e => setSubKeywords(e.target.value)}
        />
        <ButtonGroup>
          <button type="button" onClick={handleClose}>
            Fechar
          </button>
        </ButtonGroup>
      </form>
    </ContainerForm>
  );
};

export default ModalInfo;

import React, { useState, useEffect } from 'react';

import TextField from '@material-ui/core/TextField';

import { Form, InputGroup, ButtonGroup } from './styles';

interface ModalInfoProps {
  setOpen?: Function;
}

const ModalInfo = ({ setOpen }: ModalInfoProps): JSX.Element => {
  const [keyword, setKeyword] = useState('');
  const [website, setWebsite] = useState('');
  const [subKeywords, setSubKeywords] = useState('');
  const [date, setDate] = useState('');

  function handleClose(): void {
    if (setOpen) setOpen(false);
  }

  useEffect(() => {
    setKeyword('a');
    setWebsite('a');
    setSubKeywords('a');
    setDate('a');
  }, []);

  return (
    <Form>
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
      <TextField
        disabled
        multiline
        className="input"
        label="Pautas"
        variant="standard"
        value={date}
        onChange={e => setDate(e.target.value)}
      />
      <ButtonGroup>
        <button type="button" onClick={handleClose}>
          Fechar
        </button>
      </ButtonGroup>
    </Form>
  );
};

export default ModalInfo;

import React, { useState, useEffect } from 'react';

import TextField from '@material-ui/core/TextField';

import { Form, InputGroup, ButtonGroup } from './styles';

interface FormEditProps {
  setOpen?: Function;
}

const FormEdit = ({ setOpen }: FormEditProps): JSX.Element => {
  const [keyword, setKeyword] = useState('');
  const [website, setWebsite] = useState('');
  const [subKeywords, setSubKeywords] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    setKeyword('a');
    setWebsite('a');
    setSubKeywords('a');
    setDate('a');
  }, []);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    console.log('FormEdit enviado'); // eslint-disable-line
    if (setOpen) setOpen(false);
  }

  function handleClose(): void {
    if (setOpen) setOpen(false);
  }

  return (
    <Form onSubmit={handleSubmit}>
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
      <TextField
        required
        multiline
        className="input"
        label="Pautas"
        variant="outlined"
        value={date}
        onChange={e => setDate(e.target.value)}
      />
      <ButtonGroup>
        <button type="button" onClick={handleClose}>
          Cancelar
        </button>
        <button type="submit">Salvar</button>
      </ButtonGroup>
    </Form>
  );
};

export default FormEdit;

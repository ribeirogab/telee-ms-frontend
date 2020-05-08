import React, { useState } from 'react';

import TextField from '@material-ui/core/TextField';

import {
  ContainerForm,
  ButtonGroup,
} from '../../../components/StandardFormElements';

interface FormAddProps {
  setOpen?: Function;
}

const FormAdd = ({ setOpen }: FormAddProps): JSX.Element => {
  const [user, setUser] = useState('');
  const [name, setName] = useState('');

  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    console.log('FormAdd enviado'); // eslint-disable-line
    if (setOpen) setOpen(false);
  }

  function handleClose(): void {
    if (setOpen) setOpen(false);
  }

  return (
    <ContainerForm>
      <form onSubmit={handleSubmit}>
        <h2>Adicionar Usuário</h2>
        <TextField
          required
          className="input"
          label="Usuário"
          variant="outlined"
          value={user}
          onChange={e => setUser(e.target.value)}
        />
        <TextField
          required
          multiline
          className="input"
          label="Nome"
          variant="outlined"
          value={name}
          onChange={e => setName(e.target.value)}
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

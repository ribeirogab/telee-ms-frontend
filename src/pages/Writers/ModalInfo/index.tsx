import React, { useState, useEffect } from 'react';

import TextField from '@material-ui/core/TextField';

import {
  ContainerForm,
  ButtonGroup,
} from '../../../components/StandardFormElements';

interface ModalInfoProps {
  setOpen?: Function;
}

const ModalInfo = ({ setOpen }: ModalInfoProps): JSX.Element => {
  const [user, setUser] = useState('');
  const [name, setName] = useState('');

  useEffect(() => {
    setUser('a');
    setName('a');
  }, []);

  function handleClose(): void {
    if (setOpen) setOpen(false);
  }

  return (
    <ContainerForm>
      <form>
        <h2>Detalhes do Usuário</h2>
        <TextField
          disabled
          className="input"
          label="Usuário"
          variant="standard"
          value={user}
          onChange={e => setUser(e.target.value)}
        />
        <TextField
          disabled
          multiline
          className="input"
          label="Nome"
          variant="standard"
          value={name}
          onChange={e => setName(e.target.value)}
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

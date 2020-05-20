import React, { useState, useEffect } from 'react';

import TextField from '@material-ui/core/TextField';

import {
  ContainerForm,
  ButtonGroup,
} from '../../../components/StandardFormElements';

import toCapitalize from '../../../utils/toCapitalize';
import api from '../../../services/api';

interface ModalInfoProps {
  setOpen?: Function;
  writerId: string;
}

const ModalInfo = ({ setOpen, writerId }: ModalInfoProps): JSX.Element => {
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [permission, setPermission] = useState('');

  function handleClose(): void {
    if (setOpen) setOpen(false);
  }

  useEffect(() => {
    api
      .get(`/users/${writerId}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then(response => {
        setUsername(response.data.username);
        setName(response.data.name);
        setPermission(response.data.permission);
      });
  }, [writerId]);

  return (
    <ContainerForm>
      <form>
        <h2>Detalhes do Usuário</h2>
        <TextField
          disabled
          className="input"
          label="Usuário"
          variant="standard"
          value={username}
        />
        <TextField
          disabled
          multiline
          className="input"
          label="Nome"
          variant="standard"
          value={toCapitalize(name)}
        />
        <TextField
          disabled
          multiline
          className="input"
          label="Permissão"
          variant="standard"
          value={toCapitalize(permission)}
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

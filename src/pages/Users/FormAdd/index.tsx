import React, { useState } from 'react';

import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

import {
  ContainerForm,
  InputGroup,
  ButtonGroup,
} from '../../../components/StandardFormElements';

import api from '../../../services/api';
import PermissionService from '../../../services/PermissionService';

interface Writer {
  id: string;
  name: string;
  username: string;
}

interface FormAddProps {
  setOpen?: Function;
  users: Writer[];
  setUsers: Function;
}

const FormAdd = ({ setOpen, users, setUsers }: FormAddProps): JSX.Element => {
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [permission, setPermission] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    const { data: writer } = await api.post(
      '/users',
      { name, username, password, permission },
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      },
    );

    setUsers([...users, writer]);

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
          multiline
          className="input"
          label="Nome"
          variant="outlined"
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <InputGroup>
          <TextField
            required
            className="input"
            label="Usuário"
            variant="outlined"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
          <TextField
            required
            id="outlined-select-currency"
            select
            className="input"
            label="Permissão"
            value={permission}
            onChange={e => setPermission(e.target.value)}
            variant="outlined"
          >
            {PermissionService(['editor', 'administrator']) && (
              <MenuItem value="writer">Redator</MenuItem>
            )}

            {PermissionService(['editor', 'administrator']) && (
              <MenuItem value="editor">Auditor</MenuItem>
            )}

            {PermissionService(['administrator']) && (
              <MenuItem value="administrator">Administrador</MenuItem>
            )}
          </TextField>
        </InputGroup>

        <TextField
          required
          id="standard-password-input"
          label="Senha"
          type="password"
          autoComplete="current-password"
          className="input"
          variant="outlined"
          value={password}
          onChange={e => setPassword(e.target.value)}
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

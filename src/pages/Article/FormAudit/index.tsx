import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

import {
  ContainerForm,
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

interface FormAuditProps {
  setOpen?: Function;
  taskId: string;
}
const FormAudit = ({ setOpen, taskId }: FormAuditProps): JSX.Element => {
  const history = useHistory();
  const [status, setStatus] = useState('');

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    try {
      await api.patch(
        `/tasks/${taskId}`,
        { status },
        {
          headers: { authorization: `Bearer ${localStorage.getItem('token')}` },
        },
      );

      history.push('/auditoria');
    } catch (error) {
      console.log(error); // eslint-disable-line
    }
  }

  function handleClose(): void {
    if (setOpen) setOpen(false);
  }

  return (
    <ContainerForm>
      <form onSubmit={handleSubmit}>
        <h2>Auditoria</h2>
        <TextField
          required
          id="outlined-select-currency"
          select
          className="input"
          label="Status"
          value={status}
          onChange={e => setStatus(e.target.value)}
          variant="outlined"
        >
          <MenuItem value="returned">Retornar</MenuItem>
          <MenuItem value="accepted">Aceitar</MenuItem>
          <MenuItem value="recused">Recusar</MenuItem>
        </TextField>
        <ButtonGroup>
          <button type="button" onClick={handleClose}>
            Cancelar
          </button>
          <button type="submit">Confirmar</button>
        </ButtonGroup>
      </form>
    </ContainerForm>
  );
};

export default FormAudit;

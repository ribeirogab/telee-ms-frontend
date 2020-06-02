import React, { useState, useEffect } from 'react';

import Container from '@material-ui/core/Container';

import { FiMoreVertical, FiPlus, FiDelete, FiInfo } from 'react-icons/fi';

import { ToolsBar, UsersContainer, BoxUser } from './styles';

import Header from '../../components/Header';
import Modal from '../../components/Modal';
import Alert from '../../components/Alert';
import Popover from '../../components/Popover';

import FormAdd from './FormAdd';
import ModalInfo from './ModalInfo';

import toCapitalize from '../../utils/toCapitalize';
import getInitialLetters from '../../utils/getInitialLetters';
import translateUserPermission from '../../utils/translateUserPermission';
import api from '../../services/api';
import PermissionService from '../../services/PermissionService';

interface User {
  id: string;
  name: string;
  username: string;
  permission: string;
}

const Users: React.FC = () => {
  const [idForApiRequest, setIdForApiRequest] = useState<string>('');

  const [modalAddOpen, setModalAddOpen] = useState(false);
  const [modalInfoOpen, setModalInfoOpen] = useState(false);

  const [alertDeleteOpen, setAlertDeleteOpen] = useState(false);

  const [users, setUsers] = useState<User[]>([]);

  async function handleDeleteUser(): Promise<void> {
    await api.delete(`/users/${idForApiRequest}`, {
      headers: { authorization: `Bearer ${localStorage.getItem('token')}` },
    });

    setUsers(users.filter(user => user.id !== idForApiRequest));
  }

  useEffect(() => {
    api
      .get('/users', {
        headers: {
          authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then(response => setUsers(response.data));
  }, []);

  return (
    <>
      <Header textPage="Usuários" />
      <Container maxWidth="md">
        <ToolsBar>
          {PermissionService(['editor', 'administrator']) && (
            <button type="button" onClick={() => setModalAddOpen(true)}>
              <FiPlus />
              <span>ADICIONAR</span>
            </button>
          )}
        </ToolsBar>

        <UsersContainer>
          {users.map(user => (
            <BoxUser key={user.id}>
              <div className="box">
                <div className="avatar">{getInitialLetters(user.name)}</div>
                <div>
                  <span>{toCapitalize(user.name)}</span>
                  <small>{translateUserPermission(user.permission)}</small>
                </div>
                <div>
                  <Popover ElementOpenIcon={FiMoreVertical}>
                    {PermissionService(['administrator']) &&
                      user.permission !== 'administrator' && (
                        <button
                          type="button"
                          onClick={() => {
                            setIdForApiRequest(user.id);
                            setAlertDeleteOpen(true);
                          }}
                        >
                          <FiDelete />
                          <span>Excluir</span>
                        </button>
                      )}

                    <button
                      type="button"
                      onClick={() => {
                        setIdForApiRequest(user.id);
                        setModalInfoOpen(true);
                      }}
                    >
                      <FiInfo />
                      <span>Detalhes</span>
                    </button>
                  </Popover>
                </div>
              </div>
            </BoxUser>
          ))}
        </UsersContainer>
      </Container>

      <Modal
        open={modalAddOpen}
        setOpen={setModalAddOpen}
        Component={
          <FormAdd
            setOpen={setModalAddOpen}
            users={users}
            setUsers={setUsers}
          />
        }
      />
      <Modal
        open={modalInfoOpen}
        setOpen={setModalInfoOpen}
        Component={
          <ModalInfo setOpen={setModalInfoOpen} userId={idForApiRequest} />
        }
      />
      <Alert
        open={alertDeleteOpen}
        setOpen={setAlertDeleteOpen}
        title="Realmente deseja remover esta usuário?"
        text="Após a exclusão a operação não poderá ser desfeita."
        textAcceptButton="Excluir"
        ifAccepted={{
          execute: handleDeleteUser,
        }}
      />
    </>
  );
};

export default Users;

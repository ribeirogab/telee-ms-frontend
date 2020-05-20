import React, { useState, useEffect } from 'react';

import Container from '@material-ui/core/Container';

import { FiMoreVertical, FiPlus, FiDelete, FiInfo } from 'react-icons/fi';

import { ToolsBar, WritersContainer, BoxWriter } from './styles';

import Header from '../../components/Header';
import Modal from '../../components/Modal';
import Alert from '../../components/Alert';
import Popover from '../../components/Popover';

import FormAdd from './FormAdd';
import ModalInfo from './ModalInfo';

import toCapitalize from '../../utils/toCapitalize';
import getInitialLetters from '../../utils/getInitialLetters';
import api from '../../services/api';
import PermissionService from '../../services/PermissionService';

interface Writer {
  id: string;
  name: string;
  username: string;
}

const Writers: React.FC = () => {
  const [idForApiRequest, setIdForApiRequest] = useState<string>('');

  const [modalAddOpen, setModalAddOpen] = useState(false);
  const [modalInfoOpen, setModalInfoOpen] = useState(false);

  const [alertDeleteOpen, setAlertDeleteOpen] = useState(false);

  const [writers, setWriters] = useState<Writer[]>([]);

  async function handleDeleteWriter(): Promise<void> {
    await api.delete(`/users/${idForApiRequest}`, {
      headers: { authorization: `Bearer ${localStorage.getItem('token')}` },
    });

    setWriters(writers.filter(writer => writer.id !== idForApiRequest));
  }

  useEffect(() => {
    api
      .get('/users', {
        headers: {
          authorization: `Bearer ${localStorage.getItem('token')}`,
          permission: 'writer',
        },
      })
      .then(response => setWriters(response.data));
  }, []);

  return (
    <>
      <Header textPage="Redatores" />
      <Container maxWidth="md">
        <ToolsBar>
          <button type="button" onClick={() => setModalAddOpen(true)}>
            <FiPlus />
            <span>ADICIONAR</span>
          </button>
        </ToolsBar>

        <WritersContainer>
          {writers.map(writer => (
            <BoxWriter key={writer.id}>
              <div className="box">
                <div className="avatar">{getInitialLetters(writer.name)}</div>
                <div>
                  <span>{toCapitalize(writer.name)}</span>
                  <small>{writer.username}</small>
                </div>
                <div>
                  <Popover ElementOpenIcon={FiMoreVertical}>
                    {PermissionService(['administrator']) && (
                      <button
                        type="button"
                        onClick={() => {
                          setIdForApiRequest(writer.id);
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
                        setIdForApiRequest(writer.id);
                        setModalInfoOpen(true);
                      }}
                    >
                      <FiInfo />
                      <span>Detalhes</span>
                    </button>
                  </Popover>
                </div>
              </div>
            </BoxWriter>
          ))}
        </WritersContainer>
      </Container>

      <Modal
        open={modalAddOpen}
        setOpen={setModalAddOpen}
        Component={
          <FormAdd
            setOpen={setModalAddOpen}
            writers={writers}
            setWriters={setWriters}
          />
        }
      />
      <Modal
        open={modalInfoOpen}
        setOpen={setModalInfoOpen}
        Component={
          <ModalInfo setOpen={setModalInfoOpen} writerId={idForApiRequest} />
        }
      />
      <Alert
        open={alertDeleteOpen}
        setOpen={setAlertDeleteOpen}
        title="Realmente deseja remover esta usuário?"
        text="Após a exclusão a operação não poderá ser desfeita."
        textAcceptButton="Excluir"
        ifAccepted={{
          execute: handleDeleteWriter,
        }}
      />
    </>
  );
};

export default Writers;

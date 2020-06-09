import React, { useState, useCallback, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import { FiPlus, FiEdit, FiDelete } from 'react-icons/fi';

import { ToolsBar, News, ContainerNews, BoxNews } from './styles';

import Header from '../../components/Header';
import Modal from '../../components/Modal';
import Alert from '../../components/Alert';

import toCapitalize from '../../utils/toCapitalize';

import { useAuth } from '../../hooks/auth';

import PermissionService from '../../services/PermissionService';
import api from '../../services/api';

import FormAddUpdates from './FormAddUpdates';
import FormEditUpdates from './FormEditUpdate';

interface Update {
  id: string;
  title: string;
  version: string;
  description: string;
  created_at: string;
  updated_at: string;
}

const Home: React.FC = () => {
  const { user } = useAuth();
  const userFirstName = user.name.split(' ')[0];
  const [idForApiRequest, setIdForApiRequest] = useState<string>('');
  const [modalAddUpdatesOpen, setModalAddUpdatesOpen] = useState(false);
  const [modalEditUpdateOpen, setModalEditUpdateOpen] = useState(false);
  const [alertDeleteUpdateOpen, setAlertDeleteUpdateOpen] = useState(false);
  const [updates, setUpdates] = useState<Update[]>([]);

  useEffect(() => {
    api
      .get('/updates', {
        headers: {
          authorization: `Bearer ${localStorage.getItem('@teleems:token')}`,
        },
      })
      .then(response => setUpdates(response.data));
  }, []);

  const handleIdForApiRequest = useCallback((id: string) => {
    setIdForApiRequest(id);
  }, []);

  const handleOpenModalAddUpdates = useCallback(() => {
    setModalAddUpdatesOpen(true);
  }, []);

  const handleOpenModalEditUpdates = useCallback(() => {
    setModalEditUpdateOpen(true);
  }, []);

  const handleAlertDeleteUpdate = useCallback(() => {
    setAlertDeleteUpdateOpen(true);
  }, []);

  const handleDeleteUpdate = useCallback(async () => {
    await api.delete(`/updates/${idForApiRequest}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('@teleems:token')}`,
      },
    });

    setUpdates(updates.filter(update => update.id !== idForApiRequest));
  }, [idForApiRequest, updates]);

  return (
    <>
      <Header textPage={`Olá, ${toCapitalize(userFirstName)}`} />
      <Container maxWidth="lg">
        {/* <LastAcess>
          <h1>Último acesso</h1>
          <div className="box">
            <div>
              <span>Quando:</span>
              <strong>01/04/2020 11:09:08</strong>
            </div>
            <div>
              <span>Duração:</span>
              <strong>37 minutos e 20 segundos</strong>
            </div>
            <div>
              <span>Local:</span>
              <strong>187.84.7.54</strong>
            </div>
          </div>
        </LastAcess> */}

        {PermissionService(['developer']) && (
          <ToolsBar>
            <button type="button" onClick={handleOpenModalAddUpdates}>
              <FiPlus />
              <span>ADICIONAR</span>
            </button>
          </ToolsBar>
        )}

        <News>
          <h1>Novidades</h1>
          <p>
            Está no ar a versão{' '}
            <span className="version">{updates[0]?.version || '0.0.0'}</span>.
            Uma versão de testes, qualquer erro e/ou melhoria, comunicar o
            desenvolvedor no email:{' '}
            <a href="mailto:ribeirogabx@gmail.com">ribeirogabx@gmail.com</a>.
            {/* com correções, melhorias e algumas novidades que você pode conferir
            a baixo. */}
          </p>
          <ContainerNews>
            {updates.map(update => (
              <BoxNews key={update.version}>
                <div className="box">
                  <div>{update.title}</div>
                  <p>{update.description}</p>
                  {PermissionService(['developer']) && (
                    <>
                      <button
                        className="edit"
                        type="button"
                        onClick={() => {
                          handleIdForApiRequest(update.id);
                          handleOpenModalEditUpdates();
                        }}
                      >
                        <FiEdit />
                      </button>
                      <button
                        className="delete"
                        type="button"
                        onClick={() => {
                          handleIdForApiRequest(update.id);
                          handleAlertDeleteUpdate();
                        }}
                      >
                        <FiDelete />
                      </button>
                    </>
                  )}
                </div>
              </BoxNews>
            ))}
          </ContainerNews>
        </News>
      </Container>

      <Modal
        open={modalAddUpdatesOpen}
        setOpen={setModalAddUpdatesOpen}
        Component={
          <FormAddUpdates
            setOpen={setModalAddUpdatesOpen}
            updates={updates}
            setUpdates={setUpdates}
          />
        }
      />
      <Modal
        open={modalEditUpdateOpen}
        setOpen={setModalEditUpdateOpen}
        Component={
          <FormEditUpdates
            id={idForApiRequest}
            setOpen={setModalEditUpdateOpen}
            updates={updates}
            setUpdates={setUpdates}
          />
        }
      />
      <Alert
        open={alertDeleteUpdateOpen}
        setOpen={setAlertDeleteUpdateOpen}
        title="Realmente deseja remover este update?"
        text="Após a exclusão a operação não poderá ser desfeita."
        textAcceptButton="Excluir"
        ifAccepted={{
          execute: handleDeleteUpdate,
        }}
      />
    </>
  );
};

export default Home;

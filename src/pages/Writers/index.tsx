import React, { useState } from 'react';

import Container from '@material-ui/core/Container';

import {
  FiMoreVertical,
  FiPlus,
  FiEdit3,
  FiDelete,
  FiInfo,
} from 'react-icons/fi';

import { ToolsBar, WritersContainer, BoxWriter } from './styles';

import Header from '../../components/Header';
import Modal from '../../components/Modal';
import Alert from '../../components/Alert';
import Popover from '../../components/Popover';

import FormAdd from './FormAdd';
import FormEdit from './FormEdit';
import ModalInfo from './ModalInfo';

const Writers: React.FC = () => {
  const [idForApiRequest, setIdForApiRequest] = useState<string | null>(null);

  const [modalAddOpen, setModalAddOpen] = useState(false);
  const [modalEditOpen, setModalEditOpen] = useState(false);
  const [modalInfoOpen, setModalInfoOpen] = useState(false);

  const [alertDeleteOpen, setAlertDeleteOpen] = useState(false);

  const writers = [
    { id: '1', username: 'gabriel.ribeiro', name: 'Gabriel Ribeiro' },
    { id: '2', username: 'gabriel.ribeiro', name: 'Gabriel Ribeiro' },
    { id: '3', username: 'gabriel.ribeiro', name: 'Gabriel Ribeiro' },
    { id: '4', username: 'gabriel.ribeiro', name: 'Gabriel Ribeiro' },
    { id: '5', username: 'gabriel.ribeiro', name: 'Gabriel Ribeiro' },
  ];

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
                <div className="avatar">GR</div>
                <div>
                  <span>{writer.name}</span>
                  <small>{writer.username}</small>
                </div>
                <div>
                  <Popover ElementOpenIcon={FiMoreVertical}>
                    <button
                      type="button"
                      onClick={() => {
                        setIdForApiRequest(writer.id);
                        setModalEditOpen(true);
                      }}
                    >
                      <FiEdit3 />
                      <span>Editar</span>
                    </button>
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
        Component={<FormAdd setOpen={setModalAddOpen} />}
      />
      <Modal
        idForApiRequest={idForApiRequest}
        open={modalEditOpen}
        setOpen={setModalEditOpen}
        Component={<FormEdit setOpen={setModalEditOpen} />}
      />
      <Modal
        idForApiRequest={idForApiRequest}
        open={modalInfoOpen}
        setOpen={setModalInfoOpen}
        Component={<ModalInfo setOpen={setModalInfoOpen} />}
      />
      <Alert
        open={alertDeleteOpen}
        setOpen={setAlertDeleteOpen}
        title="Realmente deseja remover esta usuário?"
        text="Após a exclusão a operação não poderá ser desfeita."
        textAcceptButton="Excluir"
        ifAccepted={{
          id: idForApiRequest,
            execute: (id: string) => console.log(id), // eslint-disable-line
        }}
      />
    </>
  );
};

export default Writers;

import React, { useState } from 'react';

import Container from '@material-ui/core/Container';

import {
  FiPlus,
  FiEdit3,
  FiDelete,
  FiInfo,
  FiCornerDownLeft,
} from 'react-icons/fi';

import { ToolsBar, Table } from './styles';

import Header from '../../components/Header';
import Modal from '../../components/Modal';
import Alert from '../../components/Alert';
import Popover from '../../components/Popover';

import FormAdd from './FormAdd';
import FormEdit from './FormEdit';
import ModalInfo from './ModalInfo';

const Tasks: React.FC = () => {
  const [idForApiRequest, setIdForApiRequest] = useState<string | null>(null);

  const [modalAddOpen, setModalAddOpen] = useState(false);
  const [modalEditOpen, setModalEditOpen] = useState(false);
  const [modalInfoOpen, setModalInfoOpen] = useState(false);

  const [alertDeleteOpen, setAlertDeleteOpen] = useState(false);
  const [alertAssumeOpen, setAlertAssumeOpen] = useState(false);

  const tasks = [
    {
      id: '1',
      keyword: 'SKY TV',
      subKeywords: 'TV, assistir SKY',
      website: 'www.assinesky.com.br',
      date: '20/03/2020',
    },
    {
      id: '2',
      keyword: 'SKY TV',
      subKeywords: 'TV, assistir SKY',
      website: 'www.assinesky.com.br',
      date: '20/03/2020',
    },
    {
      id: '3',
      keyword: 'SKY TV',
      subKeywords: 'TV, assistir SKY',
      website: 'www.assinesky.com.br',
      date: '20/03/2020',
    },
    {
      id: '4',
      keyword: 'SKY TV',
      subKeywords: 'TV, assistir SKY',
      website: 'www.assinesky.com.br',
      date: '20/03/2020',
    },
  ];

  return (
    <>
      <Header textPage="Tarefas" />
      <Container maxWidth="lg">
        <ToolsBar>
          <button type="button" onClick={() => setModalAddOpen(true)}>
            <FiPlus />
            <span>ADICIONAR</span>
          </button>
        </ToolsBar>

        <div style={{ overflowX: 'auto' }}>
          <Table>
            <thead>
              <tr>
                <th>Keyword</th>
                <th>KW Secundárias</th>
                <th>Site</th>
                <th>Data</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map(task => (
                <tr key={task.id}>
                  <td>{task.keyword}</td>
                  <td>{task.subKeywords}</td>
                  <td>{task.website}</td>
                  <td>{task.date}</td>
                  <td>
                    <Popover>
                      <button
                        type="button"
                        onClick={() => {
                          setIdForApiRequest(task.id);
                          setModalEditOpen(true);
                        }}
                      >
                        <FiEdit3 />
                        <span>Editar</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setIdForApiRequest(task.id);
                          setAlertDeleteOpen(true);
                        }}
                      >
                        <FiDelete />
                        <span>Excluir</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setIdForApiRequest(task.id);
                          setModalInfoOpen(true);
                        }}
                      >
                        <FiInfo />
                        <span>Detalhes</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setIdForApiRequest(task.id);
                          setAlertAssumeOpen(true);
                        }}
                      >
                        <FiCornerDownLeft />
                        <span>Assumir</span>
                      </button>
                    </Popover>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>

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
          title="Realmente deseja remover esta tarefa?"
          text="Após a exclusão a operação não poderá ser desfeita."
          textAcceptButton="Excluir"
          ifAccepted={{
            id: idForApiRequest,
            execute: (id: string) => console.log(id), // eslint-disable-line
          }}
        />
        <Alert
          open={alertAssumeOpen}
          setOpen={setAlertAssumeOpen}
          title="Realmente deseja assumir esta tarefa?"
          text="A operação não poderá ser desfeita."
          textAcceptButton="Assumir"
          ifAccepted={{
            id: idForApiRequest,
            execute: (id: string) => console.log(id), // eslint-disable-line
          }}
        />
      </Container>
    </>
  );
};

export default Tasks;

import React, { useState, useEffect } from 'react';

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

import api from '../../services/api';
import PermissionService from '../../services/PermissionService';

interface Task {
  id: string;
  keyword: string;
  sub_keywords: string;
  website: string;
  created_at: string;
}

const Tasks: React.FC = () => {
  const [idForApiRequest, setIdForApiRequest] = useState<string>('');

  const [modalAddOpen, setModalAddOpen] = useState(false);
  const [modalEditOpen, setModalEditOpen] = useState(false);
  const [modalInfoOpen, setModalInfoOpen] = useState(false);

  const [alertDeleteOpen, setAlertDeleteOpen] = useState(false);
  const [alertAssumeOpen, setAlertAssumeOpen] = useState(false);

  const [tasks, setTasks] = useState<Task[]>([]);

  async function handleDeleteTask(): Promise<void> {
    await api.delete(`/tasks/${idForApiRequest}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });

    setTasks(tasks.filter(task => task.id !== idForApiRequest));
  }

  async function handleAssumeTask(): Promise<void> {
    await api.post(`/articles/${idForApiRequest}`, null, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });

    setTasks(tasks.filter(task => task.id !== idForApiRequest));
  }

  useEffect(() => {
    api
      .get('/tasks', {
        headers: {
          authorization: `Bearer ${localStorage.getItem('token')}`,
          status: 'available',
        },
      })
      .then(response => setTasks(response.data));
  }, []);

  return (
    <>
      <Header textPage="Tarefas" />
      <Container maxWidth="lg">
        <ToolsBar>
          {PermissionService(['editor', 'administrator']) && (
            <button type="button" onClick={() => setModalAddOpen(true)}>
              <FiPlus />
              <span>ADICIONAR</span>
            </button>
          )}
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
                  <td>{task.sub_keywords}</td>
                  <td>{task.website}</td>
                  <td>
                    {new Date(task.created_at).toLocaleDateString('pt-br')}
                  </td>
                  <td>
                    <Popover>
                      {PermissionService(['editor', 'administrator']) && (
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
                      )}

                      {PermissionService(['editor', 'administrator']) && (
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
                      )}

                      {PermissionService([
                        'writer',
                        'editor',
                        'administrator',
                      ]) && (
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
                      )}

                      {PermissionService(['writer']) && (
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
                      )}
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
          Component={
            <FormAdd
              setOpen={setModalAddOpen}
              tasks={tasks}
              setTasks={setTasks}
            />
          }
        />
        <Modal
          open={modalEditOpen}
          setOpen={setModalEditOpen}
          Component={
            <FormEdit
              setOpen={setModalEditOpen}
              taskId={idForApiRequest}
              tasks={tasks}
              setTasks={setTasks}
            />
          }
        />
        <Modal
          open={modalInfoOpen}
          setOpen={setModalInfoOpen}
          Component={
            <ModalInfo setOpen={setModalInfoOpen} taskId={idForApiRequest} />
          }
        />
        <Alert
          open={alertDeleteOpen}
          setOpen={setAlertDeleteOpen}
          title="Realmente deseja remover esta tarefa?"
          text="Após a exclusão a operação não poderá ser desfeita."
          textAcceptButton="Excluir"
          ifAccepted={{
            execute: handleDeleteTask,
          }}
        />
        <Alert
          open={alertAssumeOpen}
          setOpen={setAlertAssumeOpen}
          title="Realmente deseja assumir esta tarefa?"
          text="A operação não poderá ser desfeita."
          textAcceptButton="Assumir"
          ifAccepted={{
            execute: handleAssumeTask,
          }}
        />
      </Container>
    </>
  );
};

export default Tasks;

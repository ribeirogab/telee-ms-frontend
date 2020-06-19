import React, { useState, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import Container from '@material-ui/core/Container';

import {
  FiPlus,
  FiEdit3,
  FiDelete,
  FiInfo,
  FiCornerDownLeft,
} from 'react-icons/fi';

import { useToast } from '../../hooks/toast';

import { ToolsBar, Table } from './styles';

import Header from '../../components/Header';
import Modal from '../../components/Modal';
import Alert from '../../components/Alert';
import Popover from '../../components/Popover';
import Loader from '../../components/Loader';

import FormAdd from './FormAdd';
import FormEdit from './FormEdit';
import ModalInfo from './ModalInfo';
import Anything from '../../components/Anything';

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
  const history = useHistory();
  const { addToast } = useToast();
  const [idForApiRequest, setIdForApiRequest] = useState('');
  const [modalAddOpen, setModalAddOpen] = useState(false);
  const [modalEditOpen, setModalEditOpen] = useState(false);
  const [modalInfoOpen, setModalInfoOpen] = useState(false);
  const [alertDeleteOpen, setAlertDeleteOpen] = useState(false);
  const [alertAssumeOpen, setAlertAssumeOpen] = useState(false);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(false);

  const handleDeleteTask = useCallback(async () => {
    try {
      await api.delete(`/tasks/${idForApiRequest}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem('@teleems:token')}`,
        },
      });

      setTasks(tasks.filter(task => task.id !== idForApiRequest));
      addToast({
        type: 'success',
        title: 'Tarefa deletada com sucesso',
      });
    } catch (error) {
      addToast({
        type: 'error',
        title: 'Erro ao deletar tarefa',
        description:
          'Ocorreu um erro ao deletar tarefa, tente novamente mais tarde.',
      });
    }
  }, [idForApiRequest, tasks, addToast]);

  const handleAssumeTask = useCallback(async () => {
    try {
      await api.post(`/articles/${idForApiRequest}`, null, {
        headers: {
          authorization: `Bearer ${localStorage.getItem('@teleems:token')}`,
        },
      });

      setTasks(tasks.filter(task => task.id !== idForApiRequest));

      addToast({
        type: 'success',
        title: 'Tarefa assumida com sucesso',
      });

      history.push('/artigos');
    } catch (error) {
      addToast({
        type: 'error',
        title: 'Erro ao assumir tarefa',
        description:
          'Ocorreu um erro ao assumir tarefa, tente novamente mais tarde.',
      });
    }
  }, [history, idForApiRequest, tasks, addToast]);

  const openModallAdd = useCallback(() => setModalAddOpen(true), []);

  const openModallEdit = useCallback((id: string) => {
    setIdForApiRequest(id);
    setModalEditOpen(true);
  }, []);

  const openModallInfo = useCallback((id: string) => {
    setIdForApiRequest(id);
    setModalInfoOpen(true);
  }, []);

  const openAlertDelete = useCallback((id: string) => {
    setIdForApiRequest(id);
    setAlertDeleteOpen(true);
  }, []);

  const openAlertAssume = useCallback((id: string) => {
    setIdForApiRequest(id);
    setAlertAssumeOpen(true);
  }, []);

  useEffect(() => {
    async function loadTasks(): Promise<void> {
      setLoading(true);
      const { data } = await api.get('/tasks', {
        headers: {
          authorization: `Bearer ${localStorage.getItem('@teleems:token')}`,
          status: 'available',
        },
      });

      setTasks(data);
      setLoading(false);
    }

    loadTasks();
  }, []);

  return (
    <>
      <Header textPage="Tarefas" />
      <Container maxWidth="lg">
        <ToolsBar>
          {PermissionService([
            'editor',
            'administrator',
            'developer',
            'developer',
          ]) && (
            <button type="button" onClick={openModallAdd}>
              <FiPlus />
              <span>ADICIONAR</span>
            </button>
          )}
        </ToolsBar>

        <div style={{ overflowX: loading ? undefined : 'auto' }}>
          {loading ? (
            <Loader />
          ) : (
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
                        {PermissionService([
                          'editor',
                          'administrator',
                          'developer',
                        ]) && (
                          <button
                            type="button"
                            onClick={() => openModallEdit(task.id)}
                          >
                            <FiEdit3 />
                            <span>Editar</span>
                          </button>
                        )}

                        {PermissionService([
                          'editor',
                          'administrator',
                          'developer',
                        ]) && (
                          <button
                            type="button"
                            onClick={() => openAlertDelete(task.id)}
                          >
                            <FiDelete />
                            <span>Excluir</span>
                          </button>
                        )}

                        {PermissionService([
                          'writer',
                          'editor',
                          'administrator',
                          'developer',
                        ]) && (
                          <button
                            type="button"
                            onClick={() => openModallInfo(task.id)}
                          >
                            <FiInfo />
                            <span>Detalhes</span>
                          </button>
                        )}

                        {PermissionService(['writer']) && (
                          <button
                            type="button"
                            onClick={() => openAlertAssume(task.id)}
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
          )}
        </div>
        {!loading && tasks.length === 0 && (
          <Anything
            text={`Nenhuma tarefa cadastrada, ${
              PermissionService(['editor', 'administrator', 'developer'])
                ? 'adicione uma! o/'
                : 'volte mais tarde! :)'
            }`}
          />
        )}

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

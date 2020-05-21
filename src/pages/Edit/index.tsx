import React, { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

import {
  FiChevronLeft,
  FiChevronDown, // eslint-disable-line
  FiSettings, // eslint-disable-line
  FiChevronRight,
} from 'react-icons/fi';
import Container from '@material-ui/core/Container';
import ReactQuill from '../../components/ReactQuill';

import {
  Header,
  HeaderLeft,
  Status,
  HeaderRight,
  Values,
  Words,
  Money,
  ToggleValues,
} from './styles';

import api from '../../services/api';

interface EditParams {
  taskId: string;
}

const Edit: React.FC = () => {
  const { params } = useRouteMatch<EditParams>();
  const [openValues, setOpenValues] = useState(true);
  const [article, setArticle] = useState('');
  const [words, setWords] = useState(0);
  const [money, setMoney] = useState(0);
  const [save, setSave] = useState(false);

  async function handleSave(): Promise<void> {
    await api.put(
      `/tasks-writer/${params.taskId}`,
      { words, article },
      { headers: { authorization: `Bearer ${localStorage.getItem('token')}` } },
    );
    setSave(true);
    setTimeout(() => setSave(false), 5000);
  }

  useEffect(() => {
    api
      .get(`/tasks/${params.taskId}`, {
        headers: { authorization: `Bearer ${localStorage.getItem('token')}` },
      })
      .then(response => setArticle(response.data.article || ''));
  }, [params.taskId]);

  window.onresize = () => setOpenValues(window.innerWidth > 1350);

  return (
    <>
      <Header>
        <HeaderLeft>
          <Link to={`/artigo/${params.taskId}`}>
            <FiChevronLeft size={18} /> Voltar
          </Link>
          <Status color="#999">Escrevendo</Status>
        </HeaderLeft>
        <HeaderRight save={save}>
          <span>Artigo salvo com sucesso!</span>
          <button type="button" onClick={handleSave}>
            Salvar
            {/* <FiChevronDown size={18} /> */}
          </button>
          {/* <FiSettings className="settings" size={18} /> */}
        </HeaderRight>
      </Header>

      <Container maxWidth="md" style={{ padding: '58px 0 0 0' }}>
        <ReactQuill
          setWords={setWords}
          setMoney={setMoney}
          setValue={setArticle}
          value={article}
        />
      </Container>

      <Values open={openValues}>
        <ToggleValues>
          {openValues ? (
            <FiChevronRight size={30} onClick={() => setOpenValues(false)} />
          ) : (
            <FiChevronLeft size={30} onClick={() => setOpenValues(true)} />
          )}
        </ToggleValues>
        <Words>{words} palavras</Words>
        <Money>
          {Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(money)}
        </Money>
      </Values>
    </>
  );
};

export default Edit;

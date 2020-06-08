import React, { useState, useEffect, useCallback } from 'react';
import { Link, useRouteMatch, useHistory } from 'react-router-dom';

import { FiChevronLeft, FiChevronDown, FiChevronRight } from 'react-icons/fi';
import Container from '@material-ui/core/Container';
import ReactQuill from '../../components/ReactQuill';

import {
  Header,
  HeaderLeft,
  Status,
  HeaderRight,
  UpdateArticle,
  Values,
  Words,
  Money,
  ToggleValues,
} from './styles';

import api from '../../services/api';

interface EditParams {
  articleId: string;
}

const Edit: React.FC = () => {
  const history = useHistory();
  const { params } = useRouteMatch<EditParams>();
  const [openValues, setOpenValues] = useState(true);
  const [boxUpdateOpen, setBoxUpdateOpen] = useState(false);
  const [typeSave, setTypeSave] = useState('update');
  const [article, setArticle] = useState('');
  const [words, setWords] = useState(0);
  const [money, setMoney] = useState(0);
  const [save, setSave] = useState(false);

  window.onresize = useCallback(
    () => setOpenValues(window.innerWidth > 1350),
    [],
  );

  const handleBoxUpdate = useCallback(() => setBoxUpdateOpen(!boxUpdateOpen), [
    boxUpdateOpen,
  ]);

  const changeTypeSaveForUpdate = useCallback(() => setTypeSave('update'), []);

  const changeTypeSaveForDeliver = useCallback(
    () => setTypeSave('deliver'),
    [],
  );

  const handleOpenValues = useCallback(() => setOpenValues(true), []);
  const handleCloseValues = useCallback(() => setOpenValues(false), []);

  const handleUpdate = useCallback(async () => {
    if (typeSave === 'update') {
      await api.put(
        `/articles/${params.articleId}`,
        { words, article },
        {
          headers: { authorization: `Bearer ${localStorage.getItem('token')}` },
        },
      );
    } else if (typeSave === 'deliver') {
      // eslint-disable-next-line no-alert
      const confirmDeliver = window.confirm(
        'Após a entrega o artigo não podera mais ser editado. Deseja realmente entregar?',
      );

      if (!confirmDeliver) return;

      await api.patch(`/articles/${params.articleId}`, null, {
        headers: { authorization: `Bearer ${localStorage.getItem('token')}` },
      });

      history.push('/artigos');
    }
    setSave(true);
    setTimeout(() => setSave(false), 5000);
  }, [article, history, params.articleId, typeSave, words]);

  useEffect(() => {
    api
      .get(`/articles/${params.articleId}`, {
        headers: { authorization: `Bearer ${localStorage.getItem('token')}` },
      })
      .then(response => setArticle(response.data.article || ''));
  }, [params.articleId]);

  return (
    <>
      <Header>
        <HeaderLeft>
          <Link to={`/artigo/${params.articleId}`}>
            <FiChevronLeft size={18} /> Voltar
          </Link>
          <Status color="#999">Escrevendo</Status>
        </HeaderLeft>
        <HeaderRight save={save}>
          <span>
            Artigo {typeSave === 'update' ? 'atualizado' : 'entregue'} com
            sucesso!
          </span>
          <button type="button" onClick={handleBoxUpdate}>
            Atualizar
            <FiChevronDown size={18} />
          </button>
          <UpdateArticle isOpen={boxUpdateOpen}>
            <h1>Atualizar artigo</h1>
            <form className="body">
              <div>
                <div className="radio">
                  <input
                    type="radio"
                    name="update"
                    value="update"
                    defaultChecked
                    onClick={changeTypeSaveForUpdate}
                  />
                </div>
                <div className="change-update">
                  <strong>Atualizar</strong>
                  <small>Somente atualizar o artigo.</small>
                </div>
              </div>
              <div>
                <div className="radio">
                  <input
                    type="radio"
                    name="update"
                    value="deliver"
                    onClick={changeTypeSaveForDeliver}
                  />
                </div>
                <div className="change-update">
                  <strong>Entregar</strong>
                  <small>Entregar o artigo para auditoria.</small>
                </div>
              </div>
            </form>
            <div className="footer">
              <button
                type="button"
                className="btn-cancel"
                onClick={handleBoxUpdate}
              >
                Cancelar
              </button>
              <button
                type="button"
                className="btn-update"
                onClick={handleUpdate}
              >
                {typeSave === 'update' ? 'Atualizar' : 'Entregar'}
              </button>
            </div>
          </UpdateArticle>
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
            <FiChevronRight size={30} onClick={handleCloseValues} />
          ) : (
            <FiChevronLeft size={30} onClick={handleOpenValues} />
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

import React, { useState, useEffect, useCallback } from 'react';
import { Link, useRouteMatch, useHistory } from 'react-router-dom';

import { FiChevronLeft, FiChevronDown, FiChevronRight } from 'react-icons/fi';

import Container from '@material-ui/core/Container';
import { useToast } from '../../hooks/toast';

import ReactQuill from '../../components/ReactQuill';
import Loader from '../../components/Loader';

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
  const { addToast } = useToast();
  const { params } = useRouteMatch<EditParams>();
  const [openValues, setOpenValues] = useState(true);
  const [boxUpdateOpen, setBoxUpdateOpen] = useState(false);
  const [typeSave, setTypeSave] = useState('update');
  const [article, setArticle] = useState('');
  const [words, setWords] = useState(0);
  const [money, setMoney] = useState(0);
  const [loading, setLoading] = useState(false);

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

  const updateArticle = useCallback(async () => {
    try {
      await api.put(
        `/articles/${params.articleId}`,
        { words, article },
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem('@teleems:token')}`,
          },
        },
      );
      addToast({
        type: 'success',
        title: 'Artigo atualizado com sucesso',
      });
    } catch (error) {
      addToast({
        type: 'error',
        title: 'Erro ao atualizar artigo',
        description: 'Ocorreu um erro, tente novamente mais tarde.',
      });
    }
  }, [params.articleId, words, article, addToast]);

  const deliverArticle = useCallback(async () => {
    try {
      // eslint-disable-next-line no-alert
      const confirmDeliver = window.confirm(
        'Após a entrega o artigo não podera mais ser editado. Deseja realmente entregar?',
      );

      if (!confirmDeliver) return;

      await api.patch(`/articles/${params.articleId}`, null, {
        headers: {
          authorization: `Bearer ${localStorage.getItem('@teleems:token')}`,
        },
      });

      addToast({
        type: 'success',
        title: 'Artigo entregue com sucesso',
      });

      setBoxUpdateOpen(false);
      history.push('/artigos');
    } catch (error) {
      addToast({
        type: 'error',
        title: 'Erro ao entregar artigo',
        description: 'Ocorreu um erro, tente novamente mais tarde.',
      });
    }
  }, [history, params.articleId, addToast]);

  const handleArticle = useCallback(async () => {
    if (typeSave === 'update') {
      await updateArticle();
    } else if (typeSave === 'deliver') {
      await deliverArticle();
    }
  }, [updateArticle, deliverArticle, typeSave]);

  useEffect(() => {
    async function loadArticle(): Promise<void> {
      setLoading(true);
      const { data } = await api.get(`/articles/${params.articleId}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem('@teleems:token')}`,
        },
      });

      setArticle(data.article);
      setLoading(false);
    }

    loadArticle();
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
        <HeaderRight>
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
                onClick={handleArticle}
              >
                {typeSave === 'update' ? 'Atualizar' : 'Entregar'}
              </button>
            </div>
          </UpdateArticle>
          {/* <FiSettings className="settings" size={18} /> */}
        </HeaderRight>
      </Header>

      <Container maxWidth="md" style={{ padding: '58px 0 0 0' }}>
        {loading ? (
          <Loader />
        ) : (
          <ReactQuill
            setWords={setWords}
            setMoney={setMoney}
            setValue={setArticle}
            value={article || ''}
          />
        )}
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

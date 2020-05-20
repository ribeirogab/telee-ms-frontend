import React, { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

import {
  FiChevronLeft,
  FiChevronDown,
  FiSettings,
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

interface EditParams {
  articleId: string;
}

const Edit: React.FC = () => {
  const { params } = useRouteMatch<EditParams>();
  const [openValues, setOpenValues] = useState(true);
  const [words, setWords] = useState(0);
  const [money, setMoney] = useState(0);

  useEffect(() => {
    setMoney(words * 0.06);
  }, [words]);

  window.onresize = () => setOpenValues(window.innerWidth > 1350);

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
          <span>
            Save <FiChevronDown size={18} />
          </span>
          <FiSettings className="settings" size={18} />
        </HeaderRight>
      </Header>
      <Container maxWidth="md" style={{ padding: '58px 0 0 0' }}>
        <ReactQuill setWords={setWords} />
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
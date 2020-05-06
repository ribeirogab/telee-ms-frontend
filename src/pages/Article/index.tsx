import React, { useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

import Container from '@material-ui/core/Container';

import {
  FiInfo,
  FiEdit,
  FiArrowDown,
  FiArrowUp,
  FiSend,
  FiMessageSquare,
  FiFileText,
} from 'react-icons/fi';

import {
  ToolsBar,
  PreviewContainer,
  PreviewTop,
  PreviewBottom,
  User,
  Comments,
  Chat,
  ArticleBox,
  Status,
  Money,
  Words,
  ArticleContent,
} from './styles';

import Header from '../../components/Header';

interface ArticleParams {
  articleId: string;
}

const Article: React.FC = () => {
  const { params } = useRouteMatch<ArticleParams>();
  const [scroll, setScroll] = useState(window.scrollY >= 64);

  window.onscroll = () => setScroll(window.scrollY >= 64);

  const backToTop = (): void => window.scrollTo({ top: 0, behavior: 'smooth' });

  const goToArticle = (): void =>
    window.scrollTo({ top: 1113, behavior: 'smooth' });

  return (
    <>
      <Header textPage={`Artigo ${params.articleId}`} />

      <ToolsBar fixed={scroll}>
        <div>
          <FiInfo size={25} />
          <Link to={`/editar/artigo/${params.articleId}`}>
            <FiEdit size={25} />
          </Link>
          {scroll ? (
            <FiArrowUp size={25} onClick={backToTop} />
          ) : (
            <FiArrowDown size={25} onClick={goToArticle} />
          )}
        </div>
      </ToolsBar>

      <Container maxWidth="lg">
        <PreviewContainer>
          <PreviewTop>
            <div className="info">
              <h2>Palavra-chave</h2>
              <p>Palavras-chaves secundárias</p>
              <div className="destiny">
                <FiSend />
                <span>www.assinesky.com.br</span>
              </div>
            </div>
            <div className="values">
              <Money border color="#C93" padding="5px 20px" size={24}>
                R$ 62,50
              </Money>
              <Words border color="#5CB" size={16} padding="5px 20px">
                1200 palavras
              </Words>
            </div>
          </PreviewTop>
          <PreviewBottom>
            <div className="bar-container">
              <div className="bar">
                <User>
                  <div className="avatar">GR</div>
                  <strong>gabriel.ribeiro</strong>
                </User>
                <Status>Pendente</Status>
                <small>Última edição às 16:01 09/04/2020</small>
              </div>
            </div>
          </PreviewBottom>
        </PreviewContainer>

        <Comments>
          <h2>
            Comentários <FiMessageSquare />
          </h2>
          <div className="chat-container">
            <Chat />
            <div className="comment-area">
              <textarea name="" id="" cols={30} rows={10} />
              <button type="button">COMENTAR</button>
            </div>
          </div>
        </Comments>

        <ArticleBox>
          <h2>
            Artigo <FiFileText />
          </h2>
          <div className="article-container">
            <div className="info-container">
              <div className="info">
                <Money color="#C93" size={21}>
                  R$ 62,50
                </Money>
                <Words color="#5CB" size={21}>
                  1200 palavras
                </Words>
                <small>Última edição às 16:01 09/04/2020</small>
              </div>
            </div>
            <ArticleContent>
              <h1>Titulo</h1>
              <p>
                asdkjak alskdlkasldajsdkjask kasjdkja asdkjak
                alskdlkasldajsdkjask kasjdkja asdkjak alskdlkasld
              </p>
              <p>
                asdkjak alskdlkasldajsdkjask kasjdkja asdkjak
                alskdlkasldajsdkjask kasjdkja asdkjak alskdlkasld
              </p>
              <p>
                asdkjak alskdlkasldajsdkjask kasjdkja asdkjak
                alskdlkasldajsdkjask kasjdkja asdkjak alskdlkasld
              </p>
              <p>
                asdkjak alskdlkasldajsdkjask kasjdkja asdkjak
                alskdlkasldajsdkjask kasjdkja asdkjak alskdlkasld
              </p>
              <p>
                asdkjak alskdlkasldajsdkjask kasjdkja asdkjak
                alskdlkasldajsdkjask kasjdkja asdkjak alskdlkasld
              </p>
            </ArticleContent>
          </div>
        </ArticleBox>
      </Container>
    </>
  );
};

export default Article;

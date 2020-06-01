import React, { useState, useEffect } from 'react';
import { Link, useRouteMatch, useHistory } from 'react-router-dom';
import htmlReactParser from 'html-react-parser';

import Container from '@material-ui/core/Container';

import {
  FiEdit,
  FiArrowDown,
  FiArrowUp,
  FiSend,
  FiEdit3,
  FiFileText,
} from 'react-icons/fi';

import {
  ToolsBar,
  PreviewContainer,
  PreviewTop,
  PreviewBottom,
  User,
  ArticleBox,
  Status,
  Money,
  Words,
  ArticleContent,
} from './styles';

import Header from '../../components/Header';
import Modal from '../../components/Modal';

import FormAudit from './FormAudit';

import formatValue from '../../utils/formatValue';
import getInitialLetters from '../../utils/getInitialLetters';
import { statusColor, statusText } from '../../utils/taskStatus';

import api from '../../services/api';

interface ArticleParams {
  articleId: string;
}

interface User {
  id: string;
  name: string;
  username: string;
  permission: string;
  created_at: string;
  updated_at: string;
}

interface Task {
  id: string;
  keyword: string;
  sub_keywords: string;
  website: string;
  status: string;
  created_at: string;
  updated_at: string;
  author: User;
}

interface Article {
  id: string;
  writer: User;
  task: Task;
  words: number;
  value: string;
  article: string;
  created_at: Date;
  updated_at: Date;
  delivered_at: Date;
}

const Article: React.FC = () => {
  const history = useHistory();
  const { params } = useRouteMatch<ArticleParams>();

  const [scroll, setScroll] = useState(window.scrollY >= 64);
  const [article, setArticle] = useState<Article | null>(null);
  const [modalAuditOpen, setModalAuditOpen] = useState(false);

  window.onscroll = () => setScroll(window.scrollY >= 64);

  const backToTop = (): void => window.scrollTo({ top: 0, behavior: 'smooth' });

  const goToArticle = (): void =>
    window.scrollTo({ top: 1113, behavior: 'smooth' });

  useEffect(() => {
    api
      .get(`/articles/${params.articleId}`, {
        headers: { authorization: `Bearer ${localStorage.getItem('token')}` },
      })
      .then(response => {
        setArticle(response.data);
      });
  }, [params.articleId]);

  return (
    <>
      <Header textPage={`Artigo ${params.articleId}`} />

      <ToolsBar fixed={scroll}>
        <div>
          {article?.task.status === 'pending' && (
            <button type="button" onClick={() => setModalAuditOpen(true)}>
              <FiEdit3 size={23} />
            </button>
          )}
          {article?.task.status === 'writing' ||
          article?.task.status === 'returned' ? (
            <Link to={`/editar/artigo/${params.articleId}`}>
              <FiEdit size={25} />
            </Link>
          ) : (
            ''
          )}
          {scroll ? (
            <FiArrowUp size={25} onClick={backToTop} />
          ) : (
            <FiArrowDown size={25} onClick={goToArticle} />
          )}
        </div>
      </ToolsBar>

      <Container maxWidth="lg">
        <PreviewContainer>
          {article && (
            <>
              <PreviewTop>
                <div className="info">
                  <h2>{article.task.keyword}</h2>
                  <p>{article.task.sub_keywords}</p>
                  <div className="destiny">
                    <FiSend />
                    <span>{article.task.website}</span>
                  </div>
                </div>
                <div className="values">
                  <Money border color="#C93" padding="5px 20px" size={24}>
                    {formatValue(article.words * 0.06)}
                  </Money>
                  <Words border color="#5CB" size={16} padding="5px 20px">
                    {article.words} palavras
                  </Words>
                </div>
              </PreviewTop>
              <PreviewBottom>
                <div className="bar-container">
                  <div className="bar">
                    <User>
                      <div className="avatar">
                        {getInitialLetters(article.writer.name)}
                      </div>
                      <strong>{article.writer.username}</strong>
                    </User>
                    <Status color={statusColor(article.task.status)}>
                      {statusText(article.task.status)}
                    </Status>
                    <small>
                      Última edição:{' '}
                      {new Date(article.updated_at).toLocaleDateString('pt-br')}
                    </small>
                  </div>
                </div>
              </PreviewBottom>
            </>
          )}
        </PreviewContainer>

        {/* <Comments>
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
        </Comments> */}

        <ArticleBox>
          <h2>
            Artigo <FiFileText />
          </h2>
          {article && (
            <div className="article-container">
              <div className="info-container">
                <div className="info">
                  <Money color="#C93" size={21}>
                    {formatValue(article.words * 0.06)}
                  </Money>
                  <Words color="#5CB" size={21}>
                    {article.words} palavras
                  </Words>
                  <small>
                    {' '}
                    Última edição:{' '}
                    {new Date(article.updated_at).toLocaleDateString('pt-br')}
                  </small>
                </div>
              </div>
              <ArticleContent className="ql-editor">
                {htmlReactParser(article.article)}
              </ArticleContent>
            </div>
          )}
        </ArticleBox>
      </Container>

      <Modal
        open={modalAuditOpen}
        setOpen={setModalAuditOpen}
        Component={
          <FormAudit setOpen={setModalAuditOpen} taskId={article?.task.id} />
        }
      />
    </>
  );
};

export default Article;

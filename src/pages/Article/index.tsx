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
  FiMessageSquare, // eslint-disable-line
  FiFileText,
} from 'react-icons/fi';

import {
  ToolsBar,
  PreviewContainer,
  PreviewTop,
  PreviewBottom,
  User,
  Comments, // eslint-disable-line
  Chat, // eslint-disable-line
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
  taskId: string;
}

interface Task {
  keyword: string;
  subKeywords: string;
  website: string;
  status: string;
  words: number;
  updatedAt: string;
  article: string;
  writer: {
    name: string;
    username: string;
  };
}

const Article: React.FC = () => {
  const history = useHistory();
  const { params } = useRouteMatch<ArticleParams>();
  const [scroll, setScroll] = useState(window.scrollY >= 64);
  const [task, setTask] = useState<Task | null>(null);
  const [modalAuditOpen, setModalAuditOpen] = useState(false);

  window.onscroll = () => setScroll(window.scrollY >= 64);

  const backToTop = (): void => window.scrollTo({ top: 0, behavior: 'smooth' });

  const goToArticle = (): void =>
    window.scrollTo({ top: 1113, behavior: 'smooth' });

  useEffect(() => {
    api
      .get(`/tasks/${params.taskId}`, {
        headers: { authorization: `Bearer ${localStorage.getItem('token')}` },
      })
      .then(response => {
        setTask({
          keyword: response.data.keyword,
          subKeywords: response.data.sub_keywords,
          website: response.data.website,
          status: response.data.status,
          words: response.data.words || 0,
          updatedAt: response.data.updated_at,
          article: response.data.article || '',
          writer: {
            name: response.data.writer.name,
            username: response.data.writer.username,
          },
        });
      })
      .catch(() => history.push('/artigos'));
  }, [params.taskId, history]);

  return (
    <>
      <Header textPage={`Artigo ${params.taskId}`} />

      <ToolsBar fixed={scroll}>
        <div>
          {task?.status === 'pending' && (
            <button type="button" onClick={() => setModalAuditOpen(true)}>
              <FiEdit3 size={23} />
            </button>
          )}
          {task?.status === 'writing' || task?.status === 'returned' ? (
            <Link to={`/editar/artigo/${params.taskId}`}>
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
          {task && (
            <>
              <PreviewTop>
                <div className="info">
                  <h2>{task.keyword}</h2>
                  <p>{task.subKeywords}</p>
                  <div className="destiny">
                    <FiSend />
                    <span>{task.website}</span>
                  </div>
                </div>
                <div className="values">
                  <Money border color="#C93" padding="5px 20px" size={24}>
                    {formatValue(task.words * 0.06)}
                  </Money>
                  <Words border color="#5CB" size={16} padding="5px 20px">
                    {task.words} palavras
                  </Words>
                </div>
              </PreviewTop>
              <PreviewBottom>
                <div className="bar-container">
                  <div className="bar">
                    <User>
                      <div className="avatar">
                        {getInitialLetters(task.writer.name)}
                      </div>
                      <strong>{task.writer.username}</strong>
                    </User>
                    <Status color={statusColor(task.status)}>
                      {statusText(task.status)}
                    </Status>
                    <small>
                      Última edição:{' '}
                      {new Date(task.updatedAt).toLocaleDateString('pt-br')}
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
          {task && (
            <div className="article-container">
              <div className="info-container">
                <div className="info">
                  <Money color="#C93" size={21}>
                    {formatValue(task.words * 0.06)}
                  </Money>
                  <Words color="#5CB" size={21}>
                    {task.words} palavras
                  </Words>
                  <small>
                    {' '}
                    Última edição:{' '}
                    {new Date(task.updatedAt).toLocaleDateString('pt-br')}
                  </small>
                </div>
              </div>
              <ArticleContent className="ql-editor">
                {htmlReactParser(task.article)}
              </ArticleContent>
            </div>
          )}
        </ArticleBox>
      </Container>

      <Modal
        open={modalAuditOpen}
        setOpen={setModalAuditOpen}
        Component={
          <FormAudit setOpen={setModalAuditOpen} taskId={params.taskId} />
        }
      />
    </>
  );
};

export default Article;

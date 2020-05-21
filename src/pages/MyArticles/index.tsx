import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { FiArrowRight } from 'react-icons/fi';

import Container from '@material-ui/core/Container';

import {
  ArticlesContainer,
  ArticleBox,
  ArticleStatus,
  ArticleHeader,
  ArticleBody,
  ArticleFooter,
  AuditButton,
} from './styles';

import Header from '../../components/Header';

import {
  statusColor,
  statusIcon,
  statusText,
  isDisabled,
  isLink,
} from '../../utils/taskStatus';
import formatValue from '../../utils/formatValue';

import api from '../../services/api';

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
  assumed: string;
  delivered: string | null;
  value: number | null;
  words: number | null;
  article: string | null;
  created_at: string;
  updated_at: string;
  author: User;
  writer: User;
}

const MyArticles: React.FC = () => {
  const [tasks, setTasks] = useState<Task[] | null>(null);

  useEffect(() => {
    api
      .get('/tasks-writer', {
        headers: { authorization: `Bearer ${localStorage.getItem('token')}` },
      })
      .then(response => setTasks(response.data));
  }, []);

  return (
    <>
      <Header textPage="Artigos" />
      <Container maxWidth="lg">
        <ArticlesContainer>
          {tasks ? (
            tasks.map(item => (
              <ArticleBox key={item.id}>
                <ArticleHeader color={statusColor(item.status)}>
                  <ArticleStatus color={statusColor(item.status)}>
                    {statusIcon(item.status)}
                  </ArticleStatus>
                  <div>
                    <strong>{item.keyword}</strong>
                    <span>{item.sub_keywords}</span>
                  </div>
                </ArticleHeader>

                <ArticleBody>
                  <div className="group">
                    <div>
                      <strong>Redator:</strong> {item.writer.name}
                    </div>
                    <div>
                      <strong>Criador:</strong> {item.author.name}
                    </div>
                  </div>
                  <div className="group">
                    <div>
                      <strong>Assumido:</strong>{' '}
                      {new Date(item.assumed).toLocaleDateString('pt-br')}
                    </div>
                    <div>
                      <strong>Entregue:</strong> {item.delivered || '...'}
                    </div>
                  </div>
                  <div>
                    <strong>Destino:</strong> {item.website}
                  </div>
                </ArticleBody>

                <ArticleFooter color={statusColor(item.status)}>
                  <div className="values">
                    <strong>
                      {formatValue(item.words ? item.words * 0.06 : 0)}
                    </strong>
                    <span>{item.words || '0'} palavras</span>
                  </div>
                  <div className="audit">
                    <AuditButton
                      color={statusColor(item.status)}
                      disabled={isDisabled(item.status)}
                    >
                      <Link
                        to={isLink(item.status) ? `/artigo/${item.id}` : '#'}
                      >
                        {statusText(item.status)}{' '}
                        {isDisabled(item.status) ? (
                          false
                        ) : (
                          <FiArrowRight className="icon" size={20} />
                        )}
                      </Link>
                    </AuditButton>
                  </div>
                </ArticleFooter>
              </ArticleBox>
            ))
          ) : (
            <h3>Carregando...</h3>
          )}
        </ArticlesContainer>
      </Container>
    </>
  );
};

export default MyArticles;

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
import Loader from '../../components/Loader';
import Anything from '../../components/Anything';

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

const MyArticles: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadArticlesFromWriter(): Promise<void> {
      setLoading(true);
      const { data } = await api.get('/articles/from/writer', {
        headers: {
          authorization: `Bearer ${localStorage.getItem('@teleems:token')}`,
        },
      });

      setArticles(data);
      setLoading(false);
    }

    loadArticlesFromWriter();
  }, []);

  return (
    <>
      <Header textPage="Artigos" />
      <Container maxWidth="lg">
        <ArticlesContainer>
          {loading ? (
            <Loader />
          ) : (
            articles.map(article => (
              <ArticleBox key={article.id}>
                <ArticleHeader color={statusColor(article.task.status)}>
                  <ArticleStatus color={statusColor(article.task.status)}>
                    {statusIcon(article.task.status)}
                  </ArticleStatus>
                  <div>
                    <strong>{article.task.keyword}</strong>
                    <span>{article.task.sub_keywords}</span>
                  </div>
                </ArticleHeader>

                <ArticleBody>
                  <div className="group">
                    <div>
                      <strong>Redator:</strong> {article.writer.name}
                    </div>
                    <div>
                      <strong>Criador:</strong> {article.task.author.name}
                    </div>
                  </div>
                  <div className="group">
                    <div>
                      <strong>Assumido:</strong>{' '}
                      {new Date(article.created_at).toLocaleDateString('pt-br')}
                    </div>
                    <div>
                      <strong>Entregue:</strong>{' '}
                      {article.delivered_at
                        ? new Date(article.delivered_at).toLocaleDateString(
                            'pt-br',
                          )
                        : '...'}
                    </div>
                  </div>
                  <div>
                    <strong>Destino:</strong> {article.task.website}
                  </div>
                </ArticleBody>

                <ArticleFooter color={statusColor(article.task.status)}>
                  <div className="values">
                    <strong>
                      {formatValue(article.words ? article.words * 0.06 : 0)}
                    </strong>
                    <span>{article.words || '0'} palavras</span>
                  </div>
                  <div className="audit">
                    <AuditButton
                      color={statusColor(article.task.status)}
                      disabled={isDisabled(article.task.status)}
                    >
                      <Link
                        to={
                          isLink(article.task.status)
                            ? `/artigo/${article.id}`
                            : '#'
                        }
                      >
                        {statusText(article.task.status)}{' '}
                        {isDisabled(article.task.status) ? (
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
          )}
        </ArticlesContainer>

        {!loading && articles.length === 0 && (
          <Anything text="Você ainda não possui nenhum artigo! :(" />
        )}
      </Container>
    </>
  );
};

export default MyArticles;

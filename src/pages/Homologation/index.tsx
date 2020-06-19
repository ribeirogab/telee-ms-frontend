import React, { useState, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import { useToast } from '../../hooks/toast';

import { Container, ContainerTable, ToolsBar, Table, Status } from './styles';

import Header from '../../components/Header';
import Anything from '../../components/Anything';

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

const Homologation: React.FC = () => {
  const { addToast } = useToast();
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState<Article[]>([]);

  const handlePublishArticle = useCallback(async () => {
    try {
      await api.post(`/wp-pages/id`, null, {
        headers: {
          authorization: `Bearer ${localStorage.getItem('@teleems:token')}`,
        },
      });

      setArticles(
        articles.map(article => {
          if (article.task.id === 'id') {
            article.task.status = 'published';
          }
          return article;
        }),
      );

      addToast({
        type: 'success',
        title: 'Artigo publicado com sucesso',
      });
    } catch (error) {
      addToast({
        type: 'error',
        title: 'Erro ao publicar artigo',
        description:
          'Ocorreu um erro ao publicar artigo, tente novamente mais tarde.',
      });
    }
  }, [articles, addToast]);

  const handleRedirect = useCallback(
    (id: string) => history.push(`/homologacao/${id}`),
    [history],
  );

  useEffect(() => {
    async function LoadArticles(): Promise<void> {
      setLoading(true);
      const { data } = await api.get('/articles', {
        headers: {
          authorization: `Bearer ${localStorage.getItem('@teleems:token')}`,
          status: 'okay',
        },
      });

      setArticles(data);
      setLoading(false);
    }

    LoadArticles();
  }, []);

  return (
    <>
      <Header textPage="Homologação" />
      <Container>
        <ContainerTable>
          <ToolsBar>
            {/* <Filter>
              <FiFilter />
              <input type="text" placeholder="Filtrar artigos" />
              <button type="button">
                <FiSliders />
              </button>
            </Filter> */}
          </ToolsBar>
          <div style={{ overflowX: 'auto' }}>
            <Table>
              <thead>
                <tr>
                  <th>Keyword</th>
                  <th>Destino</th>
                  <th>Status</th>
                  <th>Qtd. palavras</th>
                  <th>Total</th>
                  <th>Data</th>
                </tr>
              </thead>
              <tbody>
                {articles.map(article => (
                  <tr
                    key={article.id}
                    onClick={() => handleRedirect(article.id)}
                  >
                    <td>{article.task.keyword}</td>
                    <td>{article.task.website}</td>
                    <td>
                      <Status status={article.task.status}>
                        <div />
                        <span>
                          {article.task.status === 'okay'
                            ? 'Aprovado'
                            : 'Publicado'}
                        </span>
                      </Status>
                    </td>
                    <td>{article.words}</td>
                    <td>{article.words * 0.06}</td>
                    <td>
                      {new Date(article.updated_at).toLocaleDateString('pt-BR')}
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </ContainerTable>
      </Container>
      {!loading && articles.length === 0 && (
        <Anything text="Nenhum artigo na homologação, volte mais tarde! c:" />
      )}
    </>
  );
};

export default Homologation;

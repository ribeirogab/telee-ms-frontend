import React, { useState, useEffect } from 'react';
import { FiFilter, FiSliders, FiMoreVertical } from 'react-icons/fi';

import {
  Container,
  ContainerTable,
  ToolsBar,
  Filter,
  Table,
  Status,
} from './styles';

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
  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState<Article[]>([]);

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
                  <th> </th>
                </tr>
              </thead>
              <tbody>
                {articles.map(article => (
                  <tr key={article.id}>
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
                    <td>
                      <FiMoreVertical />
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

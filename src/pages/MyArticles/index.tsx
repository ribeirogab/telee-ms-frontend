import React from 'react';
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
import taskStatus from '../../utils/taskStatus';

const MyArticles: React.FC = () => {
  return (
    <>
      <Header textPage="Artigos" />
      <Container maxWidth="lg">
        <ArticlesContainer>
          {[
            { id: 1, ...taskStatus(1) },
            { id: 2, ...taskStatus(2) },
            { id: 3, ...taskStatus(3) },
            { id: 4, ...taskStatus(4) },
            { id: 5, ...taskStatus(5) },
          ].map(item => (
            <ArticleBox key={item.id}>
              <ArticleHeader color={item.color}>
                <ArticleStatus color={item.color}>
                  {item.statusIcon}
                </ArticleStatus>
                <div>
                  <strong>Keywords</strong>
                  <span>subkeywords</span>
                </div>
              </ArticleHeader>

              <ArticleBody>
                <div className="group">
                  <div>
                    <strong>Redator:</strong> Patrick Perdigao
                  </div>
                  <div>
                    <strong>Criador:</strong> Gabriel Ribeiro
                  </div>
                </div>
                <div className="group">
                  <div>
                    <strong>Assumido:</strong> 31/03/2020 às 10:30
                  </div>
                  <div>
                    <strong>Entregue:</strong> 31/03/2020 às 16:45
                  </div>
                </div>
                <div>
                  <strong>Destino:</strong> www.assinesky.com.br
                </div>
              </ArticleBody>

              <ArticleFooter color={item.color}>
                <div className="values">
                  <strong>R$ 60,52</strong>
                  <span>1008 palavras</span>
                </div>
                <div className="audit">
                  <AuditButton color={item.color} disabled={item.disabled}>
                    <Link to={item.link ? `/artigo/${item.id}` : '#'}>
                      {item.statusText}{' '}
                      {item.disabled ? (
                        false
                      ) : (
                        <FiArrowRight className="icon" size={20} />
                      )}
                    </Link>
                  </AuditButton>
                </div>
              </ArticleFooter>
            </ArticleBox>
          ))}
        </ArticlesContainer>
      </Container>
    </>
  );
};

export default MyArticles;

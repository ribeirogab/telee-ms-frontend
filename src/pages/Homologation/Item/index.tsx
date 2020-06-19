import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiSettings, FiGlobe } from 'react-icons/fi';

import {
  Container,
  ToolsBar,
  ViewPageButton,
  PublishOrUpdateButton,
  ToggleSideBarButton,
  ContentContainer,
  Content,
  ContainerSidebar,
  Sidebar,
  StatusAndVisibility,
  PermaLink,
  Yoast,
  PreviewGoogle,
  PreviewBlock,
} from './styles';

import Header from '../../../components/Header';

const Item: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [slugUrl, setSlugUrl] = useState('');
  const [yoastTitle, setYoastTitle] = useState('');
  const [yoastDescription, setYoastDescription] = useState('');
  const [pageY, setPageY] = useState(0);

  const handleSidebar = useCallback(() => setSidebarOpen(!sidebarOpen), [
    setSidebarOpen,
    sidebarOpen,
  ]);

  const handleSlugUrl = useCallback(e => setSlugUrl(e.target.value), []);

  const handleYoastTitle = useCallback(e => setYoastTitle(e.target.value), []);

  const handleYoastDescription = useCallback(
    e => setYoastDescription(e.target.value),
    [],
  );

  window.addEventListener('scroll', () => {
    setPageY(window.pageYOffset);
  });

  return (
    <Container>
      <Header />
      <ToolsBar pageY={pageY}>
        <div className="left-tools">
          <Link to="/homologacao">
            <FiArrowLeft size={24} />
          </Link>
        </div>
        <div className="right-tools">
          <ViewPageButton type="button">Visualizar</ViewPageButton>
          <PublishOrUpdateButton type="button">Atualizar</PublishOrUpdateButton>
          <ToggleSideBarButton
            type="button"
            sidebarOpen={sidebarOpen}
            onClick={handleSidebar}
          >
            <FiSettings />
          </ToggleSideBarButton>
        </div>
      </ToolsBar>

      <ContentContainer sidebarOpen={sidebarOpen}>
        <Content>
          <div />
          <Yoast>
            <div>
              <strong>Frase-chave de foco</strong>
              <input type="text" />
            </div>
            <PreviewGoogle>
              <h3>Pré visualização no Google</h3>
              <PreviewBlock>
                <div className="header">
                  <FiGlobe />
                  <small>
                    assinesky.com.br {'>'} {slugUrl}
                  </small>
                </div>
                <div className="body">
                  <h3>{yoastTitle}</h3>
                  <p>{yoastDescription}</p>
                </div>
              </PreviewBlock>
              <div>
                <span>Título SEO</span>
                <input
                  type="text"
                  value={yoastTitle}
                  onChange={handleYoastTitle}
                />
              </div>
              <div>
                <span>Slug</span>
                <input type="text" value={slugUrl} onChange={handleSlugUrl} />
              </div>
              <div>
                <span>Meta-descrição</span>
                <textarea
                  value={yoastDescription}
                  onChange={handleYoastDescription}
                />
              </div>
            </PreviewGoogle>
          </Yoast>
        </Content>

        {sidebarOpen && (
          <ContainerSidebar pageY={pageY}>
            <Sidebar>
              <StatusAndVisibility>
                <strong>Status e visibilidade</strong>
                <div>
                  <span>Visibilidade</span>
                  <span className="value">Público</span>
                </div>
                <div>
                  <span>Publicado</span>
                  <span className="value">19/06/2020</span>
                </div>
              </StatusAndVisibility>
              <PermaLink>
                <strong>Link permanente</strong>
                <div>
                  <span>Slug do URL</span>
                  <input type="text" value={slugUrl} onChange={handleSlugUrl} />
                </div>
              </PermaLink>
            </Sidebar>
          </ContainerSidebar>
        )}
      </ContentContainer>
    </Container>
  );
};

export default Item;

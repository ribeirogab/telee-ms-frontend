import React from 'react'
import { FiMoreHorizontal } from 'react-icons/fi'
import { FaEdit, FaSpinner, FaUndo, FaCheck, FaTimes } from 'react-icons/fa'

import Container from '@material-ui/core/Container'

import { ArticlesContainer, ArticleBox, ArticleStatus, ArticleHeader, ArticleMoreOptions, ArticleBody, ArticleFooter, AuditButton } from './styles'

import Header from '../../components/global/Header/index'

export default function Audit () {
  return (
    <>
      <Header textPage="Artigos" />
      <Container maxWidth="lg">
        <ArticlesContainer>

          {[
            { statusIcon: <FaEdit />, statusText: 'Escrevendo', color: '#666' },
            { statusIcon: <FaSpinner />, statusText: 'Pendente', color: '#d90' },
            { statusIcon: <FaUndo />, statusText: 'Retornado', color: '#37f' },
            { statusIcon: <FaCheck />, statusText: 'Aceito', color: '#196' },
            { statusIcon: <FaTimes />, statusText: 'Recusado', color: '#e56' }
          ].map((item, index) => (
            <ArticleBox key={index}>
              <ArticleHeader color={item.color}>
                <ArticleStatus color={item.color}>{item.statusIcon}</ArticleStatus>
                <div>
                  <strong>Keywords</strong>
                  <span>subkeywords</span>
                </div>
                <ArticleMoreOptions>
                  <FiMoreHorizontal size={30}/>
                </ArticleMoreOptions>
              </ArticleHeader>

              <ArticleBody>
                <div className="group">
                  <div><strong>Redator:</strong> Patrick Perdigao</div>
                  <div><strong>Criador:</strong> Gabriel Ribeiro</div>
                </div>
                <div className="group">
                  <div><strong>Assumido:</strong> 31/03/2020 às 10:30</div>
                  <div><strong>Entregue:</strong> 31/03/2020 às 16:45</div>
                </div>
                <div><strong>Destino:</strong> www.assinesky.com.br</div>
              </ArticleBody>

              <ArticleFooter color={item.color}>
                <div className="values">
                  <strong>R$ 60,52</strong>
                  <span>1008 palavras</span>
                </div>
                <div className="audit">
                  <AuditButton color={item.color}>{item.statusText}</AuditButton>
                </div>
              </ArticleFooter>
            </ArticleBox>
          ))}

        </ArticlesContainer>
      </Container>
    </>
  )
}

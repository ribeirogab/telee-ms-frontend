import React from 'react'

import { FaEdit, FaSpinner, FaUndo, FaCheck, FaTimes } from 'react-icons/fa'
import { FiArrowRight } from 'react-icons/fi'

import Container from '@material-ui/core/Container'

import Header from '../../components/Header'

import { ArticlesContainer, ArticleBox, ArticleStatus, ArticleHeader, ArticleBody, ArticleFooter, AuditButton } from './styles'

export default function Audit () {
  return (

    <>
      <Header textPage="Artigos" />
      <Container maxWidth="lg">
        <ArticlesContainer>

          {[
            { statusIcon: <FaEdit />, statusText: 'Escrever', color: '#666', disabled: false },
            { statusIcon: <FaSpinner />, statusText: 'Pendente', color: '#d90', disabled: true },
            { statusIcon: <FaUndo />, statusText: 'Revisar', color: '#37f', disabled: false },
            { statusIcon: <FaCheck />, statusText: 'Aceito', color: '#196', disabled: true },
            { statusIcon: <FaTimes />, statusText: 'Recusado', color: '#e56', disabled: true }
          ].map((item, index) => (
            <ArticleBox key={index}>
              <ArticleHeader color={item.color}>
                <ArticleStatus color={item.color}>{item.statusIcon}</ArticleStatus>
                <div>
                  <strong>Keywords</strong>
                  <span>subkeywords</span>
                </div>
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
                  <AuditButton color={item.color} disabled={item.disabled}>
                    {item.statusText} {item.disabled ? false : (
                      <FiArrowRight className="icon" size={20} />
                    )}
                  </AuditButton>
                </div>
              </ArticleFooter>
            </ArticleBox>
          ))}

        </ArticlesContainer>
      </Container>
    </>
  )
}

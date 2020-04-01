import React from 'react'
import { FiMoreHorizontal } from 'react-icons/fi'
import { FaStar, FaEdit, FaSpinner, FaUndo, FaCheck, FaTimes } from 'react-icons/fa'

import Container from '@material-ui/core/Container'

import { ArticlesContainer, ArticleBox, ArticleStatus, ArticleHeader, ArticleMoreOptions, ArticleBody, ArticleFooter, Avatar } from './styles'

import Header from '../../components/Header/index'

export default function MyArticles () {
  return (
    <>
      <Header textPage="Artigos" />
      <Container maxWidth="lg">
        <ArticlesContainer>

          {[
            { status: <FaEdit />, bgcolor: '#ddd5' },
            { status: <FaSpinner />, bgcolor: '#fb05' },
            { status: <FaUndo />, bgcolor: '#37f5' },
            { status: <FaCheck />, bgcolor: '#1965' },
            { status: <FaTimes />, bgcolor: '#e565' }
          ].map((item, index) => (
            <ArticleBox key={index}>
              <ArticleHeader>
                <ArticleStatus bgcolor={item.bgcolor}>{item.status}</ArticleStatus>
                <div>
                  <strong>Keywords</strong>
                  <span>subkeywords</span>
                </div>
                <ArticleMoreOptions>
                  <FiMoreHorizontal size={30}/>
                </ArticleMoreOptions>
              </ArticleHeader>

              <ArticleBody>
                <div><strong>Pautas:</strong> Fazer tal coisa, e mais isso e blabla bla...</div>
                <div className="group">
                  <div><strong>Assumido:</strong> 31/03/2020</div>
                  <div><strong>Editado:</strong> 31/03/2020</div>
                </div>
                <div><strong>Destino:</strong> www.assinesky.com.br</div>
              </ArticleBody>

              <ArticleFooter>
                <div className="values">
                  <strong>R$ 60,52</strong>
                  <span>1008 palavras</span>
                </div>
                <div className="info-audit">
                  <div className="editor">
                    <Avatar>GR</Avatar>
                    <div className="info-editor">
                      <strong>Gabriel Ribeiro</strong>
                      <small>Desenvolvedor</small>
                      <span>04/04/2020</span>
                    </div>
                  </div>
                  <div className="stars">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>
              </ArticleFooter>
            </ArticleBox>
          ))}

        </ArticlesContainer>
      </Container>
    </>
  )
}

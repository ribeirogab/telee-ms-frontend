import React from 'react'
import PropTypes from 'prop-types'

import Container from '@material-ui/core/Container'

import { FiInfo, FiEdit, FiArrowDown, FiSend, FiMessageSquare, FiFileText } from 'react-icons/fi'

import { ToolsBar, PreviewContainer, PreviewTop, PreviewBottom, Comments, Chat, ArticleBox, Status, Money, Words } from './styles'

import Header from '../../components/Header'

export default function Article ({ match }) {
  const articleId = match.params.id
  return (
    <>
      <Header textPage={`Artigo ${articleId}`} />

      <ToolsBar>
        <FiInfo size={25} />
        <FiEdit size={25} />
        <FiArrowDown size={25} />
      </ToolsBar>

      <Container maxWidth="lg">
        <PreviewContainer>
          <PreviewTop>
            <div>
              <h2>Palavra-chave</h2>
              <p>Palavras-chaves secundárias</p>
              <p><FiSend /> www.assinesky.com.br</p>
            </div>
            <div>
              <Money>R$ 62,50</Money>
              <Words>1200 palavras</Words>
            </div>
          </PreviewTop>
          <PreviewBottom>
            <div>o</div>
            <strong>gabriel.ribeiro</strong>
            <Status>Pendente</Status>
            <small>Última edição às 16:01 09/04/2020</small>
          </PreviewBottom>
        </PreviewContainer>

        <Comments>
          <h2>Comentários <FiMessageSquare /></h2>
          <div>
            <Chat>

            </Chat>
            <div>
              <textarea name="" id="" cols="30" rows="10"></textarea>
              <button>COMENTAR</button>
            </div>
          </div>
        </Comments>

        <ArticleBox>
          <h2>Artigo <FiFileText /></h2>
          <div>
            <div>
              <Money>R$ 62,50</Money>
              <Words>1200 palavras</Words>
              <span><FiEdit /> Última edição às 16:01 09/04/2020</span>
            </div>
            <div>
              <h1>Titulo</h1>
              <p>asdkjak alskdlkasldajsdkjask kasjdkja asdkjak alskdlkasldajsdkjask kasjdkja asdkjak alskdlkasld</p>
              <p>asdkjak alskdlkasldajsdkjask kasjdkja asdkjak alskdlkasldajsdkjask kasjdkja asdkjak alskdlkasld</p>
              <p>asdkjak alskdlkasldajsdkjask kasjdkja asdkjak alskdlkasldajsdkjask kasjdkja asdkjak alskdlkasld</p>
              <p>asdkjak alskdlkasldajsdkjask kasjdkja asdkjak alskdlkasldajsdkjask kasjdkja asdkjak alskdlkasld</p>
              <p>asdkjak alskdlkasldajsdkjask kasjdkja asdkjak alskdlkasldajsdkjask kasjdkja asdkjak alskdlkasld</p>
            </div>
          </div>
        </ArticleBox>

      </Container>
    </>
  )
}

Article.propTypes = {
  match: PropTypes.object.isRequired
}

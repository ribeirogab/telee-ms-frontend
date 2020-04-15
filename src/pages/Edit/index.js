import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import { FiChevronLeft, FiChevronDown, FiSettings, FiChevronRight } from 'react-icons/fi'

import Container from '@material-ui/core/Container'

import { Header, HeaderLeft, Status, HeaderRight, Values, Words, Money, ToggleValues } from './styles'

export default function Edit ({ match, history }) {
  const articleId = match.params.id
  const [openValues, setOpenValues] = useState(true)

  window.onresize = () => setOpenValues(window.innerWidth > 1350)

  return (
    <>
      <Header>
        <HeaderLeft>
          <Link to={`/artigo/${articleId}`}>
            <FiChevronLeft size={20} /> Voltar
          </Link>
          <Status color="#999">Escrevendo</Status>
        </HeaderLeft>
        <HeaderRight>
          <span>Save <FiChevronDown size={20}/></span>
          <FiSettings className="settings" />
        </HeaderRight>
      </Header>
      <Container maxWidth="md" style={{ paddingTop: 90 }}>
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      it - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      it - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      it - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      Git - História, conceitos e configurações iniciais
      </Container>
      <Values open={openValues}>
        <ToggleValues>
          {openValues
            ? (<FiChevronRight size={30} onClick={() => setOpenValues(false)} />)
            : (<FiChevronLeft size={30} onClick={() => setOpenValues(true)} />)}
        </ToggleValues>
        <Words>1034 palavras</Words>
        <Money>R$ 60,50</Money>
      </Values>
    </>
  )
}

Edit.propTypes = {
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}

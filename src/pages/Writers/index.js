import React from 'react'

import { FiPlus, FiMoreVertical } from 'react-icons/fi'
import Container from '@material-ui/core/Container'

import { ToolsBar, AddButton, WritersContainer, BoxWriter } from './styles'

import Header from '../../components/Header/index'

export default function Writers () {
  return (
    <>
      <Header textPage="Redatores" />
      <Container maxWidth="md">

        <ToolsBar>
          <AddButton>
            <FiPlus size={18} />
            &nbsp;&nbsp;&nbsp;Adicionar
          </AddButton>
        </ToolsBar>

        <WritersContainer>
          {[1, 2, 3].map((item, index) => (
            <BoxWriter key={index}>
              <div className="box">
                <div>GR</div>
                <div>
                  <span>Gabriel Ribeiro</span>
                  <small>gabriel.ribeiro</small>
                </div>
                <div>
                  <FiMoreVertical size={20}/>
                </div>
              </div>
            </BoxWriter>
          ))}
        </WritersContainer>

      </Container>
    </>
  )
}

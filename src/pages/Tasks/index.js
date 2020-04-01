import React from 'react'
import { FiPlus, FiMoreHorizontal } from 'react-icons/fi'
import Container from '@material-ui/core/Container'

import { AddButton, ToolsBar, Table } from './styles'

import Header from '../../components/Header/index'

export default function Tasks () {
  const tasks = [
    { keyword: 'SKY TV', subKeywords: 'TV, assistir SKY', website: 'www.assinesky.com.br', date: '20/03/2020' },
    { keyword: 'SKY TV', subKeywords: 'TV, assistir SKY', website: 'www.assinesky.com.br', date: '20/03/2020' },
    { keyword: 'SKY TV', subKeywords: 'TV, assistir SKY', website: 'www.assinesky.com.br', date: '20/03/2020' },
    { keyword: 'SKY TV', subKeywords: 'TV, assistir SKY', website: 'www.assinesky.com.br', date: '20/03/2020' }
  ]

  return (
    <>
      <Header textPage="Tarefas" />
      <Container maxWidth="lg">
        <ToolsBar>
          <AddButton>
            <FiPlus size={18} />
            &nbsp;&nbsp;&nbsp;Adicionar
          </AddButton>
        </ToolsBar>

        <Table>
          <thead>
            <tr>
              <th>Keyword</th>
              <th>KW Secundárias</th>
              <th>Site</th>
              <th>Data</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
              <tr key={index}>
                <td>{task.keyword}</td>
                <td>{task.subKeywords}</td>
                <td>{task.website}</td>
                <td>{task.date}</td>
                <td><FiMoreHorizontal style={{ cursor: 'pointer' }} size={20}/></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  )
}

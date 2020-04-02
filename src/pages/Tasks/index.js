import React, { useState } from 'react'

import { FiPlus, FiMoreHorizontal } from 'react-icons/fi'
import Container from '@material-ui/core/Container'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import DetailsIcon from '@material-ui/icons/Details'

import Header from '../../components/global/Header/'
import Popover from '../../components/global/Popover'

import DeleteAlert from '../../components/Tasks/DeleteAlert'
import ModalDetails from '../../components/Tasks/ModalDetails'
import ModalEdit from '../../components/Tasks/ModalEdit'

import { AddButton, ToolsBar, TableContainer, Table } from './styles'

export default function Tasks () {
  const [openDeleteAlert, setOpenDeleteAlert] = useState(false)
  const [openModalDetails, setOpenModalDetails] = useState(false)
  const [openModalEdit, setOpenModalEdit] = useState(false)

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

        <DeleteAlert state={[openDeleteAlert, setOpenDeleteAlert]}/>
        <ModalDetails state={[openModalDetails, setOpenModalDetails]}/>
        <ModalEdit state={[openModalEdit, setOpenModalEdit]}/>

        <ToolsBar>
          <AddButton>
            <FiPlus size={18} />
            &nbsp;&nbsp;&nbsp;Adicionar
          </AddButton>
        </ToolsBar>

        <TableContainer>
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
                  <td>
                    <Popover
                      items={[
                        { permissionRequired: [1, 99], label: 'Editar', Icon: EditIcon, action: setOpenModalEdit },
                        { permissionRequired: [1, 99], label: 'Excluir', Icon: DeleteIcon, action: setOpenDeleteAlert },
                        { permissionRequired: [1, 99], label: 'Detalhes', Icon: DetailsIcon, action: setOpenModalDetails }
                      ]}
                      Button={(props) => <FiMoreHorizontal {...props} style={{ cursor: 'pointer' }} size={20}/>}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </TableContainer>
      </Container>
    </>
  )
}

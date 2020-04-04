import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { FiPlus, FiMoreHorizontal } from 'react-icons/fi'
import Container from '@material-ui/core/Container'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import DetailsIcon from '@material-ui/icons/Details'
import GetAppIcon from '@material-ui/icons/GetApp'

import Header from '../../components/Header'
import Popover from '../../components/utility/Popover'
import HookPopUp from '../../components/functional/HookPopUp'

import { AddButton, ToolsBar, TableContainer, Table } from './styles'

export default function Tasks () {
  const [id, setId] = useState('')
  const [open, setOpen] = useState(false)
  const [choicePopUp, setChoicePopUp] = useState('')

  const [tasks, setTasks] = useState([
    { id: '1', keyword: 'SKY TV', subKeywords: 'TV, assistir SKY', website: 'www.assinesky.com.br', date: '20/03/2020' },
    { id: '2', keyword: 'SKY TV', subKeywords: 'TV, assistir SKY', website: 'www.assinesky.com.br', date: '20/03/2020' },
    { id: '3', keyword: 'SKY TV', subKeywords: 'TV, assistir SKY', website: 'www.assinesky.com.br', date: '20/03/2020' },
    { id: '4', keyword: 'SKY TV', subKeywords: 'TV, assistir SKY', website: 'www.assinesky.com.br', date: '20/03/2020' }
  ])

  return (
    <>
      <Header textPage="Tarefas" />
      <Container maxWidth="lg">

        <HookPopUp
          choice={choicePopUp}
          openState={[open, setOpen]}
          componentState={[tasks, setTasks] }
          id={id}
          endPoint={
            choicePopUp === 'add' ? '/add'
              : choicePopUp === 'edit' ? '/edit'
                : choicePopUp === 'details' ? '/details'
                  : choicePopUp === 'delete' ? '/delete' : '/'
          }
          Component={(props) =>
            choicePopUp === 'add' ? (
              <FormAdd {...props} />
            ) : choicePopUp === 'edit' ? (
              <FormEdit {...props} id={id} />
            ) : choicePopUp === 'details' ? (
              <BoxDetails {...props} />
            ) : false
          } />

        {/* <Alert
          title="Tem certeza que deseja assmir esta tarefa?"
          text="A operação não poderá ser desfeita!"
          buttonConfirm={{ text: 'Assumir', color: 'primary' }}
          openState={[openAssumeAlert, setOpenAssumeAlert]}
          handle={handleAssume}/>  */}

        <ToolsBar>
          <AddButton onClick={() => {
            setChoicePopUp('add')
            setOpen(true)
          }}>
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
                        {
                          permissionRequired: [1, 99],
                          label: 'Editar',
                          Icon: EditIcon,
                          action: () => {
                            setId(task.id)
                            setChoicePopUp('edit')
                            setOpen(true)
                          }
                        },
                        {
                          permissionRequired: [1, 99],
                          label: 'Excluir',
                          Icon: DeleteIcon,
                          action: () => {
                            setId(task.id)
                            setChoicePopUp('delete')
                            setOpen(true)
                          }
                        },
                        {
                          permissionRequired: [1, 99],
                          label: 'Detalhes',
                          Icon: DetailsIcon,
                          action: () => {
                            setId(task.id)
                            setChoicePopUp('details')
                            setOpen(true)
                          }
                        },
                        {
                          permissionRequired: [1, 99],
                          label: 'Assumir',
                          Icon: GetAppIcon,
                          action: () => {
                            setId(task.id)
                            setChoicePopUp('assume')
                            setOpen(true)
                          }
                        }
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

function FormAdd ({ handle }) {
  const [id, setId] = useState('')
  const [keyword, setKeyword] = useState('')
  const [subKeywords, setSubKeywords] = useState('')
  const [website, setWebsite] = useState('')
  const [date, setDate] = useState('')
  return (
    <form>
      <input value={id} onChange={e => setId(e.target.value)}/>
      <input value={keyword} onChange={e => setKeyword(e.target.value)}/>
      <input value={subKeywords} onChange={e => setSubKeywords(e.target.value)}/>
      <input value={website} onChange={e => setWebsite(e.target.value)}/>
      <input value={date} onChange={e => setDate(e.target.value)}/>
      <button onClick={(e) => handle(e, { id, keyword, subKeywords, website, date })}>
        Adicionar
      </button>
    </form>
  )
} FormAdd.propTypes = {
  handle: PropTypes.func.isRequired
}

function FormEdit ({ handle, id }) {
  const [keyword, setKeyword] = useState('')
  const [subKeywords, setSubKeywords] = useState('')
  const [website, setWebsite] = useState('')
  const [date, setDate] = useState('')
  return (
    <form>
      <input value={keyword} onChange={e => setKeyword(e.target.value)}/>
      <input value={subKeywords} onChange={e => setSubKeywords(e.target.value)}/>
      <input value={website} onChange={e => setWebsite(e.target.value)}/>
      <input value={date} onChange={e => setDate(e.target.value)}/>
      <button onClick={(e) => handle(e, { id, keyword, subKeywords, website, date })}>
        Adicionar
      </button>
    </form>
  )
} FormEdit.propTypes = {
  handle: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired
}

function BoxDetails ({ handle }) {
  const [info, setInfo] = useState('')

  useEffect(() => {
    async function getInfo () {
      setInfo(await handle())
    }
    getInfo()
  }, [handle])

  return (
    <div>
      <h1>{info}</h1>
    </div>
  )
} BoxDetails.propTypes = {
  handle: PropTypes.func.isRequired
}

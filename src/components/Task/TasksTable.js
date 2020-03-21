import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'

import Table from '../Table'
import Modal from '../Modal'
import Popper from '../Popper'
import FormAddTask from './FormAddTask'
import Details from './Details'
import EditTask from './EditTask'

import createTableRow from '../../utils/createTableRow'
import handleUninitiatedTasks from '../../services/handleUninitiatedTasks'
import api from '../../services/api'

export default function TasksTable ({ user }) {
  const thead = ['Keyword', 'KW Secundárias', 'Site', 'Data', 'Ações']
  const [notDisplayRow, setNotDisplayRow] = useState([])
  const [displayRow, setDisplayRow] = useState([])

  const [detailsModal, setDetailsModal] = useState(false)
  const [infoDetailsModal, setInfoDetailsModal] = useState({})

  const [editModal, setEditModal] = useState(false)
  const [infoEditModal, setInfoEditModal] = useState({})

  const [addModal, setAddModal] = useState(false)

  useEffect(() => {
    async function getTasks () {
      if (user) {
        const token = localStorage.getItem('token')
        const { data } = await api.get('/uninitiated-task', {
          headers: { Authorization: `Bearer ${token}` }
        })
        const rowsWithData = data.map(task => createTableRow(
          task.keyword, task.subKeywords, task.website, '16/09/2020', task._id
        ))

        setNotDisplayRow(rowsWithData)
      }
    }
    getTasks()
  }, [user])

  useEffect(() => {
    function insertPopper () {
      const rowsWithPopper = notDisplayRow.map(row => {
        const lastItemIndex = row.length - 1
        return row.map((item, index) => {
          if (lastItemIndex === index) {
            return (
              <Popper
                user={user}
                state={[notDisplayRow, setNotDisplayRow]}
                action={handleUninitiatedTasks}
                modalt={[setDetailsModal, setInfoDetailsModal]}
                modal={{
                  details: [setDetailsModal, setInfoDetailsModal],
                  edit: [setEditModal, setInfoEditModal]
                }}
                id={item} />
            )
          }
          return item
        })
      })

      setDisplayRow(rowsWithPopper)
    }
    insertPopper()
  }, [user, notDisplayRow])

  return (
    <Container maxWidth="lg">
      <Grid container
        style={{ marginTop: 30 }}
        direction="row"
        justify="flex-end"
        alignItems="center">
        <Button onClick={() => setAddModal(true)} variant="outlined" color="secondary" startIcon={<AddIcon />}>Adicionar</Button>
      </Grid>

      <Table thead={thead} rows={displayRow} />

      {/* Modal to list DETAILS of the selected task */}
      <Modal open={detailsModal} setOpen={setDetailsModal} info={infoDetailsModal} Component={(props) => <Details {...props} />}/>

      {/* Modal to EDIT tasks  */}
      <Modal open={editModal} setOpen={setEditModal} info={infoEditModal} Component={(props) => <EditTask {...props} state={[notDisplayRow, setNotDisplayRow]}/>}/>

      {/* Modal to ADD tasks */}
      <Modal open={addModal} setOpen={setAddModal} Component={(props) => <FormAddTask {...props} state={[notDisplayRow, setNotDisplayRow]}/>} />

    </Container>
  )
}

TasksTable.propTypes = {
  user: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ])
}

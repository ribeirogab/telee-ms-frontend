import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import AddIcon from '@material-ui/icons/Add'

import Table from '../Table'
import Modal from '../Modal'
import Popper from '../Popper'
import FormAddTask from './FormAddTask'

import createTableRow from '../../utils/createTableRow'
import handleUninitiatedTasks from '../../services/handleUninitiatedTasks'
import api from '../../services/api'

export default function TasksTable ({ user }) {
  const thead = ['Keyword', 'KW Secundárias', 'Site', 'Data', 'Ações']
  const [rows, setRows] = useState([])

  useEffect(() => {
    async function getTasks () {
      if (user) {
        const token = localStorage.getItem('token')
        const { data } = await api.get('/task', {
          headers: { Authorization: `Bearer ${token}` }
        })
        const rowsWithData = data.map(task => createTableRow(
          task.keyword, task.subKeywords, task.website, '16/09/2020', (<Popper user={user} action={handleUninitiatedTasks} id={task._id} />)
        ))

        setRows(rowsWithData)
      }
    }
    getTasks()
  }, [user])

  return (
    <Container maxWidth="lg">
      <Grid container
        style={{ marginTop: 30 }}
        direction="row"
        justify="flex-end"
        alignItems="center">
        <Modal
          Component={(props) => <FormAddTask {...props} user={user} state={[rows, setRows]}/>}
          Icon={AddIcon}
          text="Adicionar"
          variant="outlined"
          color="secondary"
        />
      </Grid>

      <Table thead={thead} rows={rows} />
    </Container>
  )
}

TasksTable.propTypes = {
  user: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ])
}

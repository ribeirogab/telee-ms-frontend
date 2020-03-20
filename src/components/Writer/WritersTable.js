import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import AddIcon from '@material-ui/icons/Add'

import Table from '../Table'
import Modal from '../Modal'
import Popper from '../Popper'
import FormAdd from './FormAdd'

import createTableRow from '../../utils/createTableRow'
import handleWriters from '../../services/handleWriters'
import api from '../../services/api'

export default function WritersTable ({ user }) {
  const thead = ['Usuário', 'Nome', 'Função', 'Ações']
  const [rows, setRows] = useState([])

  useEffect(() => {
    async function getTasks () {
      if (user) {
        const token = localStorage.getItem('token')
        const { data } = await api.get('/user', {
          headers: { Authorization: `Bearer ${token}` }
        })
        const rowsWithData = data.map(writer => createTableRow(
          writer.username, writer.name, writer.permission, (<Popper user={user} action={handleWriters} id={writer._id} />)
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
          Component={(props) => <FormAdd {...props} state={[rows, setRows]}/>}
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

WritersTable.propTypes = {
  user: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ])
}

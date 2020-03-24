import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'

import api from '../../services/api'

export default function Destroy ({ index, additionals, setAdditionals, id, route, state }) {
  function closeComponent () {
    setAdditionals(additionals.map((additional, i) => {
      if (i === index) {
        additional.open = false
      }
      return additional
    }))
  }

  async function assumeTask () {
    try {
      const token = localStorage.getItem('token')
      const { data } = await api.put(`/writer/task/${id}`, { status: 1 }, {
        headers: { Authorization: `Bearer ${token}` }
      })
      const [rows, setRows] = state
      setRows(rows.filter(row => row[row.length - 1] !== id))
      console.log(data)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {id} - {route}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => {
            closeComponent()
          }}
          color="primary">
            Cancelar
        </Button>
        <Button
          onClick={() => {
            assumeTask()
            closeComponent()
          }}
          color="primary" autoFocus>
            Aceitar
        </Button>
      </DialogActions>
    </>
  )
}

Destroy.propTypes = {
  index: PropTypes.number,
  additionals: PropTypes.array,
  setAdditionals: PropTypes.func,
  id: PropTypes.string,
  route: PropTypes.string,
  state: PropTypes.array
}

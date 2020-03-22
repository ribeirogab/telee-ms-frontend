import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import DeleteIcon from '@material-ui/icons/Delete'

import { handleDestroy } from '../../services/handle'

export default function Destroy ({ setOpen, id, route, state }) {
  async function DestroyItemById (id, route, state) {
    await handleDestroy(id, route, state)
    const [rows, setRows] = state
    setRows(rows.filter(row => row[row.length - 1] !== id))
  }

  return (
    <>
      <DialogTitle id="alert-dialog-title">{'Tem certeza que deseja excluir?'}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Após a exclusão este item não poderá mais ser recuperado.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setOpen(false)} color="primary" variant="contained">
            Cancelar
        </Button>
        <Button
          onClick={() => {
            setOpen(false)
            DestroyItemById(id, route, state)
          }}
          startIcon={<DeleteIcon />}
          variant="contained"
          color="secondary"
          autoFocus>
            Aceitar
        </Button>
      </DialogActions>
    </>
  )
}

Destroy.propTypes = {
  setOpen: PropTypes.func,
  id: PropTypes.string,
  route: PropTypes.string,
  state: PropTypes.array
}

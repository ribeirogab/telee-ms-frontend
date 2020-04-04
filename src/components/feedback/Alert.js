import React from 'react'
import PropTypes from 'prop-types'
import Dialog from '@material-ui/core/Dialog'
import Button from '@material-ui/core/Button'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'

export default function SimpleAlert ({ title, text, buttonConfirm, openState, handle }) {
  const [open, setOpen] = openState

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {text}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setOpen(false)} variant="contained" color="primary" autoFocus>
          Cancelar
        </Button>
        <Button onClick={() => {
          handle()
          setOpen(false)
        }}
        variant="contained" color={buttonConfirm.color}>
          {buttonConfirm.text}
        </Button>
      </DialogActions>
    </Dialog>
  )
}

SimpleAlert.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  buttonConfirm: PropTypes.object.isRequired,
  openState: PropTypes.array.isRequired,
  handle: PropTypes.func
}

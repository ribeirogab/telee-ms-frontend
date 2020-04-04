import React from 'react'
import PropTypes from 'prop-types'
import Dialog from '@material-ui/core/Dialog'

export default function SimpleAlert ({ state, Component }) {
  const [open, setOpen] = state

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
      <Component />
    </Dialog>
  )
}

SimpleAlert.propTypes = {
  state: PropTypes.array.isRequired,
  Component: PropTypes.func.isRequired
}

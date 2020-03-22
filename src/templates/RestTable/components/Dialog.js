import React from 'react'
import PropTypes from 'prop-types'

import Dialog from '@material-ui/core/Dialog'

export default function AlertDialog ({ open, Component }) {
  return (
    <Dialog
      open={open}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <Component />
    </Dialog>
  )
}

AlertDialog.propTypes = {
  open: PropTypes.bool,
  Component: PropTypes.func
}

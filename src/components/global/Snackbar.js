import React from 'react'
import PropTypes from 'prop-types'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'

function Alert (props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />
}

export default function CustomizedSnackbars ({ state, severity, text }) {
  const [open, setOpen] = state
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }

    setOpen(false)
  }

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={open}
      autoHideDuration={4000}
      onClose={handleClose}
    >
      <Alert onClose={handleClose} severity={severity}>
        {text}
      </Alert>
    </Snackbar>
  )
}

CustomizedSnackbars.propTypes = {
  state: PropTypes.array.isRequired,
  severity: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

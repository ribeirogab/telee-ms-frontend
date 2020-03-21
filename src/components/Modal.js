import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    borderRadius: 4
  }
}))

export default function TransitionsModal ({ open, setOpen, info, Component }) {
  const classes = useStyles()
  if (open) {
    return (
      <div>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={() => setOpen(false)}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500
          }}
        >
          <Fade in={open}>
            <div className={classes.paper}>
              <Component setOpen={setOpen} info={info} />
            </div>
          </Fade>
        </Modal>
      </div>
    )
  } else return <></>
}

TransitionsModal.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
  info: PropTypes.object,
  Component: PropTypes.func
}

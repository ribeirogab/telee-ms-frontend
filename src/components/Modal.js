import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'

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

export default function TransitionsModal ({ Component, Icon, text, variant, color }) {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <Button variant={variant} color={color} onClick={handleOpen}>
        <Icon/> {text}
      </Button>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={open}>
          <Container maxWidth="md" className={classes.paper}>
            <Component closeModal={handleClose} />
          </Container>
        </Fade>
      </Modal>
    </div>
  )
}

TransitionsModal.propTypes = {
  Component: PropTypes.func.isRequired,
  Icon: PropTypes.object.isRequired,
  state: PropTypes.array,
  text: PropTypes.string,
  variant: PropTypes.string,
  color: PropTypes.string
}

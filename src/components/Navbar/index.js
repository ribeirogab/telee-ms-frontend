import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import Menu from './Menu'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  appBar: {
    backgroundColor: '#E75656'
  },
  title: {
    flexGrow: 1
  }
}))

export default function Navbar ({ user, textPage }) {
  const [firstName, setFirstName] = useState('')
  const classes = useStyles()

  useEffect(() => {
    function handleUser () {
      if (user.name) setFirstName(user.name.split(' ')[0])
    }
    handleUser()
  }, [user])

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Menu user={user} />
          <Typography variant="h6" className={classes.title}>
            {textPage === 'Home' ? `Olá, ${firstName}` : textPage}
          </Typography>
          <Button color="inherit">.</Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

Navbar.propTypes = {
  user: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  textPage: PropTypes.string
}

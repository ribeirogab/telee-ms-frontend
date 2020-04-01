import React from 'react'
import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import Menu from './Menu'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginBottom: 40
  },
  appBar: {
    backgroundColor: '#E75656'
  },
  title: {
    flexGrow: 1
  }
}))

export default function Navbar ({ textPage }) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Menu />
          <Typography variant="h6" className={classes.title}>
            {textPage === 'Home' ? `Olá, ${'Gabriel'}` : textPage}
          </Typography>
          <Button color="inherit">.</Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

Navbar.propTypes = {
  textPage: PropTypes.string
}

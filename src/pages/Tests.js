import React from 'react'
import PropTypes from 'prop-types'

import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import ImageIcon from '@material-ui/icons/Image'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    borderRadius: 16,
    boxShadow: '4px 4px 8px #0003',
    padding: '10%'
  },
  nameFunc: {
    padding: 0,
    paddingBottom: 5,
    marginBottom: 20,
    borderBottom: 'solid 1px #0001'
  },
  textField: {
    marginBottom: 20,
    width: '100%'
  },
  containerButton: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  closeButton: {
    marginTop: 20
  }
}))

export default function Test ({ setOpen }) {
  const classes = useStyles()
  return (
    <Container maxWidth="md">
      <Grid container className={classes.root}>
        <Grid item>
          <ListItem className={classes.nameFunc}>
            <ListItemAvatar>
              <Avatar>
                <ImageIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Gabriel" secondary="Desenvolvedor" />
          </ListItem>
          <TextField
            className={classes.textField}
            label="Usuário"
            defaultValue="Hello World"
            InputProps={{
              readOnly: true
            }}
          />
          <TextField
            className={classes.textField}
            label="Nome"
            defaultValue="Hello World"
            InputProps={{
              readOnly: true
            }}
          />
          <TextField
            className={classes.textField}
            label="E-mail"
            defaultValue="Hello World"
            InputProps={{
              readOnly: true
            }}
          />
          <TextField
            className={classes.textField}
            label="Permissão"
            defaultValue="Hello World"
            InputProps={{
              readOnly: true
            }}
          />
          <div className={classes.containerButton} >
            <Button onClick={() => setOpen(false)} className={classes.closeButton} color="secondary">
            Fechar
            </Button>
          </div>
        </Grid>
      </Grid>
    </Container>
  )
}

Test.propTypes = {
  setOpen: PropTypes.func
}

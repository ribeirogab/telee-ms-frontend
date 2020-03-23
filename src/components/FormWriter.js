import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import MenuItem from '@material-ui/core/MenuItem'

const useStyles = makeStyles(theme => ({
  textField: {
    width: '100%',
    marginBottom: 25
  },
  containerButtons: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  button: {
    borderRadius: 26,
    marginTop: 40,
    backgroundColor: 'rgb(251,63,63)',
    background: 'radial-gradient(circle, rgba(251,63,63,1) 0%, rgba(186,53,80,1) 100%)'
  },
  closeButton: {
    marginTop: 40,
    marginRight: 30
  }
}))

export default function FormWriter ({ setOpen, handleItem, isUpdate }) {
  const classes = useStyles()
  const [username, setUsername] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [permission, setPermission] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    if (isUpdate) {
      setUsername(isUpdate.username)
      setName(isUpdate.name)
      // setEmail(isUpdate.email)
      setPermission(isUpdate.permission)
      setPassword('')
    }
  }, [isUpdate])

  async function handleSubmit (e) {
    e.preventDefault()
    handleItem({ username, name, permission, password })
    setOpen(false)
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <TextField
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className={classes.textField}
        label="Usuário"
        type="text"
      />
      <TextField
        value={name}
        onChange={(e) => setName(e.target.value)}
        className={classes.textField}
        label="Nome"
        type="text"
      />
      <TextField
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={classes.textField}
        label="E-mail"
        type="email"
      />
      <TextField
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className={classes.textField}
        label="Password"
        type="password"
      />
      <TextField
        value={permission}
        onChange={(e) => setPermission(e.target.value)}
        className={classes.textField}
        helperText={'Para saber mais sobre as permissões clique aqui.'}
        select
        label="Permissão"
        type="email">
        <MenuItem value="1">1</MenuItem>
        <MenuItem value="2">2</MenuItem>
        <MenuItem value="3">3</MenuItem>
      </TextField>
      <div className={classes.containerButtons}>
        <Button onClick={() => setOpen(false)} className={classes.closeButton} color="secondary">
          Fechar
        </Button>
        <Button type="submit" className={classes.button} variant="contained" color="primary">
          Cadastrar
        </Button>
      </div>
    </form>
  )
}

FormWriter.propTypes = {
  setOpen: PropTypes.func,
  handleItem: PropTypes.func,
  isUpdate: PropTypes.object
}

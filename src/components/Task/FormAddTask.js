import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import TextareaAutosize from '@material-ui/core/TextareaAutosize'
import Grid from '@material-ui/core/Grid'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import Popper from '../Popper'
import Chip from '../Chip'
import api from '../../services/api'
import handleUninitiatedTasks from '../../services/handleUninitiatedTasks'
import reduceGuidelines from '../../utils/reduceGuidelines'
import createTableRow from '../../utils/createTableRow'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  title: {
    marginBottom: 30
  },
  input: {
    width: '100%',
    color: '#333'
  },
  textArea: {
    width: '96.5%',
    padding: 14,
    background: 'none',
    borderRadius: 4,
    borderColor: '#0004',
    color: '#333'
  },
  buttons: {
    paddingTop: 15,
    borderTop: 'solid 1px #0001'
  }
}))

export default function FormAddTask ({ user, state, closeModal }) {
  const [keyword, setKeyword] = useState('')
  const [subKeywords, setSubKeywords] = useState('')
  const [website, setWebsite] = useState('')
  const [newChip, setNewChip] = useState('')
  const [chipData, setChipData] = useState([])
  const [description, setDescription] = useState('')

  const matches = useMediaQuery('(min-width:768px)')
  const classes = useStyles()

  async function handleSubmit (e) {
    e.preventDefault()
    const [rows, setRows] = state

    const token = localStorage.getItem('token')
    const guidelines = reduceGuidelines(chipData)

    const { data } = await api.post('/task',
      { type: 'article', keyword, subKeywords, website, guidelines, description },
      { headers: { Authorization: `Bearer ${token}` } }
    )

    if (!data.error) closeModal()

    const newRow = createTableRow(data.keyword, data.subKeywords, data.website, '16/09/2020', (<Popper user={user} action={handleUninitiatedTasks} id={data._id} />))
    setRows(rows.concat(newRow))
  }

  return (
    <>
      <Grid container
        direction="row"
        justify="center"
        alignItems="center"
        className={classes.title}
      >
        <Typography variant="h4" component="h4" gutterBottom>
          Cadastrar Tarefa
        </Typography>
      </Grid>

      <form className={classes.root} onSubmit={(e) => handleSubmit(e)} noValidate autoComplete="off">
        <Grid container spacing={3}>
          <Grid item xs={matches ? 6 : 12}>
            <TextField
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              className={classes.input}
              label="Keyword"
              variant="outlined" />
          </Grid>
          <Grid item xs={matches ? 6 : 12}>
            <TextField
              className={classes.input}
              id="outlined-select-currency"
              select
              label="Site destino"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              variant="outlined"
            >
              {['teste'].map((option, index) => (
                <MenuItem key={index} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={12}>
            <TextField
              value={subKeywords}
              onChange={(e) => setSubKeywords(e.target.value)}
              helperText="Separadas por vírgula."
              className={classes.input}
              label="KW Secundárias (opcional)"
              variant="outlined" />
          </Grid>

          <Grid item xs={12}>
            <TextareaAutosize
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className={classes.textArea}
              placeholder="Descrição (opcional)" />
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h6" component="span" gutterBottom>
              Pautas
            </Typography>
            <Chip
              newChip={newChip}
              setNewChip={setNewChip}
              chipData={chipData}
              setChipData={setChipData}
            />
          </Grid>

          <Grid container
            direction="row"
            justify="flex-end"
            alignItems="center"
            className={classes.buttons}
          >
            <Button onClick={closeModal} color="secondary">
              Cancelar
            </Button>&nbsp;&nbsp;
            <Button color="primary" type="submit">
              Cadastrar
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  )
}

FormAddTask.propTypes = {
  user: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  state: PropTypes.array,
  closeModal: PropTypes.func
}

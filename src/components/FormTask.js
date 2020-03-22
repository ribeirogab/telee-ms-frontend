import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import TextareaAutosize from '@material-ui/core/TextareaAutosize'
import Grid from '@material-ui/core/Grid'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save'
import Container from '@material-ui/core/Container'

import Chip from './Chip'

import reduceGuidelines from '../utils/reduceGuidelines'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  container: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: 4,
    boxShadow: '5px 5px 10px #0004',
    padding: 30
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

export default function FormAddTask ({ setOpen, handleItem, isUpdate }) {
  const [keyword, setKeyword] = useState('')
  const [subKeywords, setSubKeywords] = useState('')
  const [website, setWebsite] = useState('')
  const [newChip, setNewChip] = useState('')
  const [chipData, setChipData] = useState([])
  const [description, setDescription] = useState('')

  useEffect(() => {
    if (isUpdate) {
      setKeyword(isUpdate.keyword)
      setSubKeywords(isUpdate.subKeywords)
      setWebsite(isUpdate.website)
      setChipData(isUpdate.guidelines.map((guideline, index) => ({ key: index, label: guideline })))
      setDescription(isUpdate.description)
    }
  }, [isUpdate])

  const matches = useMediaQuery('(min-width:768px)')
  const classes = useStyles()

  async function handleSubmit (e) {
    e.preventDefault()
    const guidelines = reduceGuidelines(chipData)
    handleItem({ type: 'article', keyword, subKeywords, website, guidelines, description })
    setOpen(false)
  }

  return (
    <Container maxWidth="md" className={classes.container}>
      <Grid container
        direction="row"
        justify="center"
        alignItems="center"
        className={classes.title}
      >
        <Typography variant="h4" component="h4" gutterBottom>
          {isUpdate ? 'Editar Tarefa' : 'Cadastrar Tarefa'}
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
            <Button onClick={() => setOpen(false)} color="secondary">
              Cancelar
            </Button>&nbsp;&nbsp;
            {isUpdate ? (
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
                className={classes.button}
                startIcon={<SaveIcon />}
              >
              Salvar
              </Button>
            ) : (
              <Button color="primary" type="submit">
              Cadastrar
              </Button>
            )}
          </Grid>
        </Grid>
      </form>
    </Container>
  )
}

FormAddTask.propTypes = {
  setOpen: PropTypes.func,
  handleItem: PropTypes.func,
  isUpdate: PropTypes.object
}

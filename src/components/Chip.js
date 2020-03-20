import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Chip from '@material-ui/core/Chip'
import Paper from '@material-ui/core/Paper'
import AddCircleIcon from '@material-ui/icons/AddCircle'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    padding: theme.spacing(0.5)
  },
  chip: {
    margin: theme.spacing(0.5)
  },
  containerAddChip: {
    display: 'flex',
    alignItems: 'center',
    margin: 4,
    padding: 4,
    borderRadius: 16,
    backgroundColor: '#E0E0E0'
  },
  inputAddChip: {
    backgroundColor: '#fff1',
    marginLeft: 8,
    border: 'none'
  },
  buttonAddChip: {
    color: '#0004',
    cursor: 'pointer',
    '&:hover': {
      color: '#0006'
    }
  }
}))

export default function ChipsArray ({ newChip, setNewChip, chipData, setChipData }) {
  const classes = useStyles()

  const addChip = () => {
    if (newChip.length !== 0) {
      const key = chipData.length
      setChipData(chipData.concat({ key, label: newChip }))
      setNewChip('')
    }
  }

  const handleDelete = chipToDelete => () => {
    setChipData(chips => chips.filter(chip => chip.key !== chipToDelete.key))
  }

  return (
    <Paper className={classes.root}>
      {chipData.map(data => {
        return (
          <Chip
            key={data.key}
            label={data.label}
            onDelete={handleDelete(data)}
            className={classes.chip}
          />
        )
      })}
      <div className={classes.containerAddChip}>
        <input
          size={newChip.length < 11 ? 11 : newChip.length + 1 }
          className={classes.inputAddChip}
          type="text"
          placeholder="Adicionar..."
          value={newChip}
          onChange={(e) => setNewChip(e.target.value)}/>
        <AddCircleIcon className={classes.buttonAddChip} onClick={addChip}/>
      </div>
    </Paper>
  )
}

ChipsArray.propTypes = {
  newChip: PropTypes.string,
  setNewChip: PropTypes.func,
  chipData: PropTypes.array,
  setChipData: PropTypes.func
}

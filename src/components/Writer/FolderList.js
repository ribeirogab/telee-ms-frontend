import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { bindTrigger } from 'material-ui-popup-state'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'

import Avatar from '../Avatar'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: 10,
    display: 'flex',
    justifyContent: 'center'
  },
  item: {
    width: '90%',
    backgroundColor: theme.palette.background.paper,
    boxShadow: '2px 2px 4px #0001'
  }
}))

export default function FolderList ({ user, setModalAdd, thead, rows, setId, additionals, setAdditionals, setModalEdit, setAlertDelete, setModalDetails, Popper }) {
  const classes = useStyles()
  const matches = useMediaQuery('(min-width:768px)')

  return (
    <Container maxWidth="md">
      <Grid container
        style={{ marginTop: 30, paddingBottom: 15, borderBottom: 'solid 1px #0001' }}
        direction="row"
        justify="flex-end"
        alignItems="center">
        <Button onClick={() => setModalAdd(true)} variant="outlined" color="secondary" startIcon={<AddIcon />}>Adicionar</Button>
      </Grid>
      <Grid container>
        {rows.map((row, index) => (
          <Grid item xs={matches ? 6 : 12} className={classes.root} key={index}>
            <ListItem className={classes.item}>

              <ListItemAvatar>
                <Avatar name={row[0]}/>
              </ListItemAvatar>
              <ListItemText primary={row[0]} secondary={row[1]} />

              <Popper
                user={user}
                id={row[row.length - 1]}
                setId={setId}
                additionals={additionals}
                setAdditionals={setAdditionals}
                setModalEdit={setModalEdit}
                setModalDelete={setAlertDelete}
                setModalDetails={setModalDetails}
                PopperButton={(props) => (
                  // eslint-disable-next-line react/prop-types
                  <MoreVertIcon style={{ cursor: 'pointer' }} {...bindTrigger(props.popupState)}/>
                )}
              />

            </ListItem>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

FolderList.propTypes = {
  user: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  setModalAdd: PropTypes.func,
  thead: PropTypes.array,
  rows: PropTypes.array,
  setId: PropTypes.func,
  additionals: PropTypes.array,
  setAdditionals: PropTypes.func,
  setModalEdit: PropTypes.func,
  setAlertDelete: PropTypes.func,
  setModalDetails: PropTypes.func,
  Popper: PropTypes.func
}

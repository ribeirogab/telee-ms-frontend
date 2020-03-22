import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import { bindTrigger } from 'material-ui-popup-state'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    borderSpacing: '0 15px',
    borderCollapse: 'separate'
  },
  th: {
    fontWeight: 'bold',
    border: 'none',
    paddingBottom: 0
  },
  TableRow: {
    backgroundColor: '#fff',
    boxShadow: '2px 2px 4px #0002'
  },
  TableCell: {
    border: 'none'
  }
})

export default function DefaultTable ({ user, setModalAdd, thead, rows, setId, additionals, setAdditionals, setModalEdit, setAlertDelete, setModalDetails, Popper }) {
  const classes = useStyles()
  return (
    <TableContainer>
      <Grid container
        style={{ marginTop: 30 }}
        direction="row"
        justify="flex-end"
        alignItems="center">
        <Button onClick={() => setModalAdd(true)} variant="outlined" color="secondary" startIcon={<AddIcon />}>Adicionar</Button>
      </Grid>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            {thead.map((th, index) => (
              <TableCell align="center" className={classes.th} key={index}>{th}</TableCell>
            ))}
            <TableCell className={classes.th} align="center">Ações</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow className={classes.TableRow} key={index}>
              {row.filter((td, index) => row.length - 1 !== index).map((td, index) => (
                <TableCell className={classes.TableCell} align="center" key={index}>{td}</TableCell>
              ))}
              <TableCell align="center">
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
                    <Button variant="outlined" color="secondary" {...bindTrigger(props.popupState)}>
                      <MoreHorizIcon/>
                    </Button>
                  )}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

DefaultTable.propTypes = {
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

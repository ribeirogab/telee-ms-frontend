import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'

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

export default function SimpleTable ({ thead, rows }) {
  const classes = useStyles()
  return (
    <TableContainer>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            {thead.map((th, index) => (
              <TableCell align="center" className={classes.th} key={index}>{th}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow className={classes.TableRow} key={index}>
              {Object.values(row).map((td, index) => (
                <TableCell className={classes.TableCell} align="center" key={index}>{td}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

SimpleTable.propTypes = {
  thead: PropTypes.array,
  rows: PropTypes.array
}

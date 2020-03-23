import React from 'react'
import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import DataUsageIcon from '@material-ui/icons/DataUsage'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import CancelIcon from '@material-ui/icons/Cancel'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 768
  },
  container: {
    width: '90%',
    margin: '0 auto',
    borderRadius: 4,
    boxShadow: '5px 5px 10px #0004',
    backgroundColor: theme.palette.background.paper
  },
  key: {
    color: '#444'
  },
  value: {
    paddingRight: 20,
    paddingLeft: 20,
    marginLeft: 20,
    color: '#222',
    textAlign: 'right'
  },
  bar: {
    backgroundColor: '#ccc',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: 5,
    borderRadius: 4
  },
  closeButton: {
    color: '#f44',
    cursor: 'pointer',
    width: 20,
    height: 20,
    backgroundColor: '#fff',
    padding: 1,
    paddingLeft: 40,
    borderRadius: 8
  }
}))

export default function DefaultDetails ({ data, setOpen }) {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.bar}>
          <CancelIcon className={classes.closeButton} onClick={() => setOpen(false)} />
        </div>
        <List component="nav" aria-label="secondary mailbox folders">
          {Object.keys(data).map((item, index) => (
            <React.Fragment key={index}>
              <Divider />
              <ListItem button >
                <ListItemIcon>
                  <DataUsageIcon/>
                </ListItemIcon>
                <ListItemText className={classes.key.split('_').join(' ')} primary={`${item}:`} />
                <ListItemText className={classes.value} primary={data[item]} />
              </ListItem>
            </React.Fragment>
          ))}
          <Divider />
        </List>
      </div>
    </div>
  )
}

DefaultDetails.propTypes = {
  data: PropTypes.object,
  setOpen: PropTypes.func
}

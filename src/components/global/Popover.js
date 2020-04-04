import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Popover from '@material-ui/core/Popover'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

const useStyles = makeStyles((theme) => ({
  iconList: {
    color: '#333',
    marginRight: '5px'
  }
}))

export default function SimplePopover ({ items, Button }) {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined

  return (
    <>
      <Button aria-describedby={id} variant="contained" color="primary" onClick={handleClick} />
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
      >
        {items.map((item, index) => (
          <ListItem button key={index} onClick={() => {
            handleClose()
            item.action(item.id)
          }}>
            <item.Icon className={classes.iconList} />
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
      </Popover>
    </>
  )
}

SimplePopover.propTypes = {
  items: PropTypes.array.isRequired,
  Button: PropTypes.func.isRequired
}

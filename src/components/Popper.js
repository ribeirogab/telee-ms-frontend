import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'

export default function Popper ({ user, action, id }) {
  const [menuItems, setMenuItems] = useState([])

  useEffect(() => {
    function handlePopper () {
      if (user) {
        setMenuItems(action(user.permission))
      }
    }
    handlePopper()
  }, [user])

  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {popupState => (
        <>
          <Button variant="outlined" color="secondary" {...bindTrigger(popupState)}>
            <MoreHorizIcon/>
          </Button>
          <Menu {...bindMenu(popupState)}>
            {menuItems.map((item, index) => (
              <MenuItem onClick={popupState.close} key={index}>
                <span onClick={() => item.func(id)}>{item.label.toUpperCase()}</span>
              </MenuItem>
            ))}
          </Menu>
        </>
      )}
    </PopupState>
  )
}

Popper.propTypes = {
  user: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  action: PropTypes.func,
  id: PropTypes.string
}

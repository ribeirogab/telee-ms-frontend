import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'

import Avatar from '../Avatar'
import menuItems from '../../utils/menuItems'

const useStyles = makeStyles({
  list: {
    width: 250
  },
  fullList: {
    width: 'auto'
  },
  Link: {
    color: '#333',
    textDecoration: 'none'
  },
  profileMenu: {
    backgroundColor: '#eee',
    padding: 2
  },
  nameAndFunction: {
    fontSize: '14px',
    color: '#555'
  },
  ArrowBackIosIcon: {
    fontSize: 'medium',
    cursor: 'pointer'
  }
})

export default function Menu () {
  const [headerMenu, bodyMenu, footerMenu] = menuItems()
  const classes = useStyles()

  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false
  })

  const toggleDrawer = (anchor, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return
    }

    setState({ ...state, [anchor]: open })
  }

  const list = anchor => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom'
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List className={classes.profileMenu}>
        <ListItem>
          <ListItemIcon><Avatar name='Gabriel Ribeiro'/></ListItemIcon>
          <ListItemText>
            <p className={classes.nameAndFunction}>Gabriel Ribeiro</p>
            <p className={classes.nameAndFunction}>Desenvolvedor</p>
          </ListItemText>
          <ArrowBackIosIcon className={classes.ArrowBackIosIcon} onClick={toggleDrawer('left', false)}/>
        </ListItem>
      </List>

      <List>
        {headerMenu.map((item, index) => (
          <Link className={classes.Link} to={item.path} key={index}>
            <ListItem button>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          </Link>
        ))}
      </List>

      {bodyMenu.length !== 0 ? (
        <>
          <Divider />
          <List>
            {bodyMenu.map((item, index) => (
              <Link className={classes.Link} to={item.path} key={index}>
                <ListItem button>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItem>
              </Link>
            ))}
          </List>
        </>
      ) : false}

      <Divider />
      <List>
        {footerMenu.map((item, index) => (
          <ListItem button key={index} onClick={item.onclick}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </div>
  )

  return (
    <div>
      <IconButton onClick={toggleDrawer('left', true)} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
        <MenuIcon/>
      </IconButton>
      <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
        {list('left')}
      </Drawer>
    </div>
  )
}

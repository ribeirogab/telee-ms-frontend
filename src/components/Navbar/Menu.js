import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
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
import menuRestriction from '../../utils/menuRestriction'

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
    fontSize: '12px',
    color: '#555'
  },
  ArrowBackIosIcon: {
    fontSize: 'medium',
    cursor: 'pointer'
  }
})

export default function Menu ({ user }) {
  const [bodyMenu, setBodyMenu] = useState([])
  const [editorMenuOnly, setEditorMenuOnly] = useState([])
  const [footerMenu, setFooterMenu] = useState([])
  const classes = useStyles()

  useEffect(() => {
    function handleMenu () {
      if (user.permission) {
        const [body, editorOnly, footer] = menuRestriction(user.permission)
        setBodyMenu(body)
        setEditorMenuOnly(editorOnly)
        setFooterMenu(footer)
      }
    }

    handleMenu()
  }, [user])

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
          <ListItemIcon><Avatar name={user.name}/></ListItemIcon>
          <ListItemText>
            <p className={classes.nameAndFunction}>{user.name}</p>
            <p className={classes.nameAndFunction}>{user.permission <= 3 ? 'Redator' : user.permission <= 6 ? 'Editor' : 'Desenvolvedor'}</p>
          </ListItemText>
          <ArrowBackIosIcon className={classes.ArrowBackIosIcon} onClick={toggleDrawer('left', false)}/>
        </ListItem>
      </List>

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

      {editorMenuOnly.length !== 0 ? (
        <>
          <Divider />
          <List>
            {editorMenuOnly.map((item, index) => (
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

Menu.propTypes = {
  user: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ])
}

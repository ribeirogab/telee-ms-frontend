import React, { useCallback, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import { FiMenu, FiChevronLeft, FiLogOut } from 'react-icons/fi';

import { Sidebar, Menu, SidebarHeader } from './styles';

import { AuthContext } from '../../context/AuthContext';

import menuItems from '../../utils/menuItems';
import getInitialLetters from '../../utils/getInitialLetters';
import translateUserPermission from '../../utils/translateUserPermission';
import PermissionService from '../../services/PermissionService';

interface MenuDrawerProps {
  textPage?: string;
}

const MenuDrawer = ({ textPage }: MenuDrawerProps): JSX.Element => {
  const history = useHistory();
  const { user, signOut } = useContext(AuthContext);
  const [state, setState] = React.useState({ left: false });
  const [headerMenu, bodyMenu, footerMenu] = menuItems();

  const handleSignOut = useCallback(() => {
    signOut(history);
  }, [history, signOut]);

  const toggleDrawer = useCallback(
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ left: open });
    },
    [],
  );

  const list = (): JSX.Element => (
    <Sidebar>
      <SidebarHeader>
        <div className="avatar">{getInitialLetters(user.name)}</div>
        <div className="user-info">
          <span>{user.name}</span>
          <small>{translateUserPermission(user.permission)}</small>
        </div>
        <button type="button" onClick={toggleDrawer(false)}>
          <FiChevronLeft size={20} />
        </button>
      </SidebarHeader>

      <List>
        {headerMenu.map(
          item =>
            PermissionService(item.permissions) && (
              <Link to={item.path} key={item.text}>
                <ListItem button onClick={toggleDrawer(false)}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItem>
              </Link>
            ),
        )}
      </List>
      <Divider />
      <List>
        {bodyMenu.map(
          item =>
            PermissionService(item.permissions) && (
              <Link to={item.path} key={item.text}>
                <ListItem button onClick={toggleDrawer(false)}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItem>
              </Link>
            ),
        )}
      </List>
      <Divider />
      <List>
        {footerMenu.map(
          item =>
            PermissionService(item.permissions) && (
              <Link to={item.path} key={item.text}>
                <ListItem button onClick={toggleDrawer(false)}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItem>
              </Link>
            ),
        )}

        <ListItem button onClick={handleSignOut}>
          <ListItemIcon>
            <FiLogOut />
          </ListItemIcon>
          <ListItemText primary="Sair" />
        </ListItem>
      </List>
    </Sidebar>
  );

  return (
    <Menu>
      <div className="side">
        <button type="button" onClick={toggleDrawer(true)}>
          <FiMenu size={20} />
        </button>
        <p>{textPage && textPage}</p>
      </div>
      <Drawer anchor="left" open={state.left} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
    </Menu>
  );
};

export default MenuDrawer;

import React from 'react'

import AppsIcon from '@material-ui/icons/Apps'
import DashboardIcon from '@material-ui/icons/Dashboard'
import InsertChartIcon from '@material-ui/icons/InsertChart'
import AssignmentIcon from '@material-ui/icons/Assignment'
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks'
import PageviewIcon from '@material-ui/icons/Pageview'
import PeopleAltIcon from '@material-ui/icons/PeopleAlt'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'

import logout from '../services/logout'

export default function menuRestriction (permission) {
  const body = []
  const editorOnly = []
  const footer = [{ text: 'Sair', icon: (<ExitToAppIcon/>), onclick: logout }]

  const allPermissions = [
    { text: 'Home', path: '/home', icon: (<AppsIcon/>) },
    { text: 'Dashboard', path: '/dashboard', icon: <DashboardIcon/> },
    { text: 'Relatórios', path: '/relatorios', icon: (<InsertChartIcon/>) },
    { text: 'Tarefas', path: '/tarefas', icon: <AssignmentIcon/> }
  ]

  const writerPermissionsOnly = [
    { text: 'Meus artigos', path: '/artigos', icon: (<LibraryBooksIcon/>) }
  ]

  const editorPermissionsOnly = [
    { text: 'Auditoria', path: '/auditoria', icon: (<PageviewIcon />) },
    { text: 'Redatores', path: '/redatores', icon: (<PeopleAltIcon/>) }
  ]

  if (permission >= 0 && permission <= 2) {
    body.push(...allPermissions, ...writerPermissionsOnly)
  } else if (permission >= 3 && permission <= 5) {
    body.push(...allPermissions)
    editorOnly.push(...editorPermissionsOnly)
  } else if (permission === 99) {
    body.push(...allPermissions, ...writerPermissionsOnly)
    editorOnly.push(...editorPermissionsOnly)
  }
  return [body, editorOnly, footer]
}

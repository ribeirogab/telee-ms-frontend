import React from 'react'

import AppsIcon from '@material-ui/icons/Apps'
import AssignmentIcon from '@material-ui/icons/Assignment'
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks'
import PageviewIcon from '@material-ui/icons/Pageview'
import PeopleAltIcon from '@material-ui/icons/PeopleAlt'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'

export default function menuItems () {
  const headerMenu = [
    { icon: <AppsIcon />, text: 'Home', path: '/', permissionMinMax: [1, 99] },
    { icon: <AssignmentIcon />, text: 'Tarefas', path: '/tarefas', permissionMinMax: [1, 99] },
    { icon: <LibraryBooksIcon />, text: 'Meus artigos', path: '/artigos', permissionMinMax: [1, 3] }
  ]

  const bodyMenu = [
    { icon: <PageviewIcon />, text: 'Auditoria', path: '/auditoria', permissionMinMax: [4, 99] },
    { icon: <PeopleAltIcon />, text: 'Redatores', path: '/redatores', permissionMinMax: [4, 99] }
  ]

  const footerMenu = [
    { icon: <ExitToAppIcon />, text: 'Sair', path: null, permissionMinMax: [1, 99] }
  ]

  return [headerMenu, bodyMenu, footerMenu]
}

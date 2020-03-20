import React from 'react'
import PropTypes from 'prop-types'

import AppBar from '../components/Navbar/index'
import TasksTable from '../components/Task/TasksTable'

export default function Tasks ({ user }) {
  return (
    <>
      <AppBar textPage="Tarefas" user={user} />
      <TasksTable user={user} />
    </>
  )
}

Tasks.propTypes = {
  user: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ])
}

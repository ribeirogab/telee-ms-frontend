import React from 'react'
import PropTypes from 'prop-types'

import RestTable from '../templates/RestTable/RestTable'

import AppBar from '../components/Navbar/index'
import AssumeTask from '../components/Task/AssumeTask'
import FormTask from '../components/Task/FormTask'

import formatTaskDetails from '../utils/formatTaskDetails'
import selectTaskData from '../utils/selectTaskData'

export default function Test ({ user }) {
  const thead = ['Keyword', 'KW Secundárias', 'Site', 'Data']
  const additionalComponent = [
    {
      container: 'Dialog',
      AdditionalComponent: AssumeTask,
      text: 'ASSUMIR',
      route: '/assumir',
      permission: (permission) => permission <= 3
    }
  ]

  return (
    <>
      <AppBar textPage="Tarefas" user={user} />
      <RestTable
        user={user}
        thead={thead}
        Form={FormTask}
        formatDetails={formatTaskDetails}
        selectData={selectTaskData}
        additionalToPopper={additionalComponent}
        routes = {{
          index: '/uninitiated-task',
          show: '/uninitiated-task/:id',
          store: '/uninitiated-task',
          put: '/uninitiated-task/:id',
          destroy: '/uninitiated-task/:id'
        }}
        customTable={false}
      />
    </>
  )
}

Test.propTypes = {
  user: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ])
}

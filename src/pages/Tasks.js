import React from 'react'
import PropTypes from 'prop-types'

import RestTable from '../templates/RestTable/RestTable'

import AppBar from '../components/Navbar/index'
import AssumeTask from '../components/Task/AssumeTask'
import FormTask from '../components/Task/FormTask'
import DetailsTask from '../components/Task/DetailsTask'

import formatTaskDetails from '../utils/task/formatTaskDetails'
import selectTaskData from '../utils/task/selectTaskData'

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
        CustomizedDetails={DetailsTask}
        formatDetails={formatTaskDetails}
        selectData={selectTaskData}
        additionalToPopper={additionalComponent}
        routes = {{
          index: '/task/uninitiated',
          show: '/task/u/:id',
          store: '/task',
          put: '/task/:id',
          destroy: '/task/:id'
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

import React from 'react'
import PropTypes from 'prop-types'

import RestTable from '../templates/RestTable/RestTable'

import AppBar from '../components/Navbar/index'
import FormTask from '../components/FormTask'
import FolderList from '../components/FolderList'

import formatWriterDetails from '../utils/formatWriterDetails'
import selectWriterData from '../utils/selectWriterData'

export default function Test ({ user }) {
  return (
    <>
      <AppBar textPage="Redatores" user={user} />
      <RestTable
        user={user}
        thead={[]}
        Form={FormTask}
        formatDetails={formatWriterDetails}
        selectData={selectWriterData}
        additionalToPopper={[]}
        routes = {{
          index: '/writer',
          show: '/writer/u/:id',
          store: '/writer',
          put: '/writer/u/:id',
          destroy: '/writer/u/:id'
        }}
        customTable={FolderList}
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

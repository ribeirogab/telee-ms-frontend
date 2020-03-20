import React from 'react'
import PropTypes from 'prop-types'

import AppBar from '../components/Navbar/index'
import WritersTable from '../components/Writer/WritersTable'

export default function Writers ({ user }) {
  return (
    <>
      <AppBar textPage="Redatores" user={user} />
      <WritersTable user={user} />
    </>
  )
}

Writers.propTypes = {
  user: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ])
}

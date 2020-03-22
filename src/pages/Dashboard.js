import React from 'react'
import PropTypes from 'prop-types'

import AppBar from '../components/Navbar/index'

export default function Dashboard ({ user }) {
  return (
    <>
      <AppBar textPage="Dashboard" user={user} />
    </>
  )
}

Dashboard.propTypes = {
  user: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ])
}

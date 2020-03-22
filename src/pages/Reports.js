import React from 'react'
import PropTypes from 'prop-types'

import AppBar from '../components/Navbar/index'

export default function Reports ({ user }) {
  return (
    <>
      <AppBar textPage="Relátorios" user={user} />
    </>
  )
}

Reports.propTypes = {
  user: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ])
}

import React from 'react'
import PropTypes from 'prop-types'

import AppBar from '../components/Navbar/index'

export default function Audit ({ user }) {
  return (
    <>
      <AppBar textPage="Auditoria" user={user} />
    </>
  )
}

Audit.propTypes = {
  user: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ])
}

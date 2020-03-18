import React from 'react'
import PropTypes from 'prop-types'

import AppBar from '../components/Navbar/index'

export default function Home ({ user }) {
  return (
    <>
      <AppBar user={user} />
    </>
  )
}

Home.propTypes = {
  user: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ])
}

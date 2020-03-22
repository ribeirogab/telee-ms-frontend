import React from 'react'
import PropTypes from 'prop-types'

import AppBar from '../components/Navbar/index'

export default function MyArticles ({ user }) {
  return (
    <>
      <AppBar textPage="Meus artigos" user={user} />
    </>
  )
}

MyArticles.propTypes = {
  user: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ])
}

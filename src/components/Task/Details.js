import React from 'react'
import PropTypes from 'prop-types'

export default function Details ({ info }) {
  return (
    <>
      <h1>D E T A L H E S</h1>
      <h2>ID: {info._id}</h2>
    </>
  )
}

Details.propTypes = {
  info: PropTypes.object
}

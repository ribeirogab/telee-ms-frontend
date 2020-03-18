import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import { isAuthenticated } from '../services/authenticate'

export default function PrivateRoute ({ component: Component, ...rest }) {
  return (
    <Route {...rest} render={props => (
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
      // eslint-disable-next-line react/prop-types
        <Redirect to={{ pathname: '/', state: { from: props.location } }} />
      )
    )}/>
  )
}
PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired
}

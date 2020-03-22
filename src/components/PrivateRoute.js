import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'

import { isAuthenticated } from '../services/authenticate'

export default function PrivateRoute ({ component: Component, user, permission, ...rest }) {
  return (
    <Route {...rest} render={props => (
      isAuthenticated() ? (
        <Component {...props} user={user}/>
      ) : (
      // eslint-disable-next-line react/prop-types
        <Redirect to={{ pathname: '/', state: { from: props.location } }} />
      )
    )}/>
  )
}
PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  user: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  permission: PropTypes.bool
}

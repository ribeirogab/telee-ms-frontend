import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'

import { isAuthenticated } from '../services/authenticate'
import api from '../services/api'

export default function PrivateRoute ({ component: Component, ...rest }) {
  const [user, setUser] = useState('...')

  useEffect(() => {
    async function getUser () {
      const token = localStorage.getItem('token')
      const { data } = await api.get('/user/one', {
        headers: { Authorization: `Bearer ${token}` }
      })

      setUser(data)
    }
    getUser()
  }, [])

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
  component: PropTypes.func.isRequired
}

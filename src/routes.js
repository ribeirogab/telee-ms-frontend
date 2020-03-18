import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'

import Login from './pages/Login'
import Home from './pages/Home'

export default function Routes () {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact={true} path="/" component={Login} />
        <PrivateRoute path="/home" component={Home} />
      </Switch>
    </BrowserRouter>
  )
}

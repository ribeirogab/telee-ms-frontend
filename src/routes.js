import React, { useState, useEffect } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'

import Login from './pages/Login'
import Home from './pages/Home'
import Tasks from './pages/Tasks'
import Writers from './pages/Writers'

import api from './services/api'

export default function Routes () {
  const [user, setUser] = useState('')
  const [token, setToken] = useState(localStorage.getItem('token'))

  useEffect(() => {
    async function getUser () {
      if (token) {
        const { data } = await api.get('/user/u/I', {
          headers: { Authorization: `Bearer ${token}` }
        })
        setUser(data)
      }
    }
    getUser()
  }, [token])

  return (
    <BrowserRouter>
      <Switch>
        <Route exact={true} path="/" component={({ history }) => <Login setToken={setToken} history={history}/>} />
        <PrivateRoute user={user} path="/home" component={Home} />
        <PrivateRoute user={user} path="/tarefas" component={Tasks} />
        <PrivateRoute user={user} path="/redatores" component={Writers} />
      </Switch>
    </BrowserRouter>
  )
}

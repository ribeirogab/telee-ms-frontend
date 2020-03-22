import React, { useState, useEffect } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'

import Login from './pages/Login'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Reports from './pages/Reports'
import Tasks from './pages/Tasks'
import MyArticles from './pages/MyArticles'
import Audit from './pages/Audit'
import Writers from './pages/Writers'
import Tests from './pages/Tests'

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
        <PrivateRoute user={user} permission={true} path="/home" component={Home} />
        <PrivateRoute user={user} permission={true} path="/dashboard" component={Dashboard} />
        <PrivateRoute user={user} permission={true} path="/relatorios" component={Reports} />
        <PrivateRoute user={user} permission={true} path="/tarefas" component={Tasks} />
        <PrivateRoute user={user} permission={user.permission <= 3} path="/artigos" component={MyArticles} />
        <PrivateRoute user={user} permission={user.permission >= 4} path="/auditoria" component={Audit} />
        <PrivateRoute user={user} permission={user.permission >= 4} path="/redatores" component={Writers} />
        <PrivateRoute user={user} permission={true} path="/tests" component={Tests} />
      </Switch>
    </BrowserRouter>
  )
}

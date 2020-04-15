import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Tasks from './pages/Tasks'
import MyArticles from './pages/MyArticles'
import Audit from './pages/Audit'
import Writers from './pages/Writers'
import Article from './pages/Article'
import Edit from './pages/Edit'

export default function Routes () {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/tarefas" component={Tasks} />
        <Route path="/artigos" component={MyArticles} />
        <Route path="/auditoria" component={Audit} />
        <Route path="/redatores" component={Writers} />
        <Route path="/artigo/:id" component={Article} />
        <Route path="/editar/:id" component={Edit} />
      </Switch>
    </BrowserRouter>
  )
}

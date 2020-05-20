import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';

import Login from '../pages/Login';
import Home from '../pages/Home';
import Tasks from '../pages/Tasks';
import MyArticles from '../pages/MyArticles';
import Audit from '../pages/Audit';
import Writers from '../pages/Writers';
import Article from '../pages/Article';
import Edit from '../pages/Edit';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <PrivateRoute
          path="/dashboard"
          permissions={['writer', 'editor', 'administrator']}
          component={Home}
        />
        <PrivateRoute
          path="/tarefas"
          component={Tasks}
          permissions={['writer', 'editor', 'administrator']}
        />
        <PrivateRoute
          path="/artigos"
          component={MyArticles}
          permissions={['writer']}
        />
        <PrivateRoute
          path="/auditoria"
          component={Audit}
          permissions={['editor', 'administrator']}
        />
        <PrivateRoute
          path="/redatores"
          component={Writers}
          permissions={['editor', 'administrator']}
        />
        <PrivateRoute
          path="/artigo/:articleId"
          component={Article}
          permissions={['writer', 'editor', 'administrator']}
        />
        <PrivateRoute
          path="/editar/artigo/:articleId"
          component={Edit}
          permissions={['writer', 'editor', 'administrator']}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;

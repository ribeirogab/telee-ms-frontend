import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';

import SignIn from '../pages/SignIn';
import Home from '../pages/Home';
import Tasks from '../pages/Tasks';
import MyArticles from '../pages/MyArticles';
import Audit from '../pages/Audit';
import Homologation from '../pages/Homologation';
import ItemHomologation from '../pages/Homologation/Item';
import Users from '../pages/Users';
import Article from '../pages/Article';
import Edit from '../pages/Edit';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={SignIn} />

        <PrivateRoute
          path="/dashboard"
          permissions={['writer', 'editor', 'administrator', 'developer']}
          component={Home}
        />
        <PrivateRoute
          path="/tarefas"
          component={Tasks}
          permissions={['writer', 'editor', 'administrator', 'developer']}
        />
        <PrivateRoute
          path="/artigos"
          component={MyArticles}
          permissions={['writer']}
        />
        <PrivateRoute
          path="/auditoria"
          component={Audit}
          permissions={['editor', 'administrator', 'developer']}
        />
        <PrivateRoute
          exact
          path="/homologacao"
          component={Homologation}
          permissions={['editor', 'administrator', 'developer']}
        />
        <PrivateRoute
          path="/homologacao/:articleId"
          component={ItemHomologation}
          permissions={['editor', 'administrator', 'developer']}
        />
        <PrivateRoute
          path="/usuarios"
          component={Users}
          permissions={['editor', 'administrator', 'developer']}
        />
        <PrivateRoute
          path="/artigo/:articleId"
          component={Article}
          permissions={['writer', 'editor', 'administrator', 'developer']}
        />
        <PrivateRoute
          path="/editar/artigo/:articleId"
          component={Edit}
          permissions={['writer', 'editor', 'administrator', 'developer']}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;

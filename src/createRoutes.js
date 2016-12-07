import React from 'react';
import { IndexRoute, Route } from 'react-router';

import { AppPage } from './pages/AppPage';
import {HomePage} from './pages/HomePage';
import ShoppingListPage from './pages/ShoppingListPage';

export function createRoutes() {
  return (
    <Route path="/" component={AppPage}>
      <IndexRoute component={HomePage}/>
      <Route path="shopping-list" component={ShoppingListPage} />
    </Route>
  );
}
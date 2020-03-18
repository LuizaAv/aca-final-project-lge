import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Spending from './pages/Spending/Spending';
import Categories from './pages/Categories/Categories';
import History from './pages/History/History';

export default function Main() {
  return (
    <Switch>
      <Route exact path="/">
        <Spending />
      </Route>

      <Route path="/Categories">
        <Categories />
      </Route>

      <Route path="/History">
        <History />
      </Route>
    </Switch>
  );
}
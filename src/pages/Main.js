import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import Summary from './Summary/Summary';
import Categories from './Categories/Categories';
import History from './History/History';

export default function Main() {
  return (
    <div>
      <Link to="/">Summary</Link>
      <Link to="/Categories">Categories</Link>
      <Link to="/History">History</Link>

      <Switch>
        <Route exact path="/">
          <Summary />
        </Route>

        <Route path="/Categories">
          <Categories />
        </Route>

        <Route path="/History">
          <History />
        </Route>
      </Switch>
    </div>
  );
}

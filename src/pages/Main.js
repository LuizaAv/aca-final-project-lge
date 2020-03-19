import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import Summary from './Summary/Summary';
import Categories from './Categories/Categories';
import History from './History/History';

export default function Main() {
  return (
    <div>
<<<<<<< HEAD:src/components/Main.js

      <Link to="/">Spending</Link><br/><button/><hr/>
      <Link to="/Categories">Categories</Link><br/><hr/>
=======
      <Link to="/">Summary</Link>
      <Link to="/Categories">Categories</Link>
>>>>>>> 2be36de42a7e4386f0bfb772abf9ac7d0d8aacae:src/pages/Main.js
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

import React, { useReducer } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import { StoreContext } from '../store/storeContext';
import { reducer } from '../store/reducers';

import Summary from './Summary/Summary';
import Categories from './Categories/Categories';
import History from './History/History';

import { budget, categories } from '../API/db';

const initialState = {
  categories: [...categories],
  budget: [...budget],
};


export default function Main() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StoreContext.Provider value={{ state, dispatch }}>
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
    </StoreContext.Provider>
  );
}

import React, { useReducer } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import { StoreContext } from '../store/storeContext';
import { reducer } from '../store/reducers';

import Summary from './Summary/Summary';
import Categories from './Categories/Categories';
import History from './History/History';
import AddBudget from '../components/AddBudget/AddBudget';

import { budget, categories } from '../API/db';

const initialState = {
  categories: [...categories],
  budget: [...budget],
};


export default function Main() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      <AddBudget />

      <Button style={{background:'blue'}} variant="outlined">
        <Link style={{textDecoration:'none',color:'white'}} to="/">Summary</Link>
      </Button>
      <Button variant="outlined">
        <Link style={{textDecoration:'none'}} to="/Categories">Categories</Link>
      </Button>
      <Button variant="outlined">
        <Link style={{textDecoration:'none'}} to="/History">History</Link>
      </Button>

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

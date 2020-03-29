import React, { useReducer } from 'react';
<<<<<<< HEAD
import { Switch, Route, Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import useStyles from './Main.style';
=======
import { Switch, Route } from 'react-router-dom';
>>>>>>> 9fb9dc6389b649591db991d3dd6e85599dfb9918

import { StoreContext } from '../store/storeContext';
import { reducer } from '../store/reducers';

import Header from '../components/Header/Header';
import Summary from './Summary/Summary';
import Categories from './Categories/Categories';
import History from './History/History';
import useStyles from './Main.style';

import { budget, categories } from '../API/db';

const initialState = {
  categories: [...categories],
  budget: [...budget],
};

export default function Main() {
  const classes = useStyles();
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      <Header />
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

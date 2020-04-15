import React, { useReducer, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import { StoreContext } from '../store/storeContext';
import { reducer } from '../store/reducers';
import { initCategory, initBudget } from '../store/actions';
import { dbGetBudget, dbGetCategory } from '../API/dbActions';

import Navigation from '../components/Navigation/Navigation';
import Summary from './Summary/Summary';
import Categories from './Categories/Categories';
import History from './History/History';
import Chart from './Charts/Chart';
import useStyles from './Main.style';

const initialState = {
  categories: [],
  budget: [],
};

export default function Main() {
  const classes = useStyles();
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dbGetCategory()
      .then((categories) => dispatch(initCategory(categories)))
      .then((response) => response.json())
      .catch((error) => (`Error:${error}`));
    dbGetBudget()
      .then((budget) => dispatch(initBudget(budget)))
      .then((response) => response.json())
      .catch((error) => (`Error:${error}`));
  }, []);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      <div className={classes.root}>
        <div className={classes.navigation}>
          <Navigation />
        </div>
        <div className={classes.content}>
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
            <Route path="/Charts">
              <Chart />
            </Route>
          </Switch>
        </div>
      </div>
    </StoreContext.Provider>
  );
}

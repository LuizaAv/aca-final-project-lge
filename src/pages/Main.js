import React, { useReducer, useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import {messages} from '../languages/messages'

import { StoreContext } from '../store/storeContext';
import { reducer } from '../store/reducers';
import { initCategory, initBudget } from '../store/actions';
import { dbGetBudget, dbGetCategory } from '../API/dbActions';
import {IntlProvider} from 'react-intl';

import Navigation from '../components/Navigation/Navigation';
import Summary from './Summary/Summary';
import Categories from './Categories/Categories';
import History from './History/History';
import Chart from './Charts/Chart';
import Snackbars from '../components/Snackbars/Snackbars';
import useStyles from './Main.style';

const initialState = {
  categories: [],
  budget: [],
};

export default function Main() {
  const classes = useStyles();
  const [state, dispatch] = useReducer(reducer, initialState);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    dbGetCategory()
      .then((categories) => dispatch(initCategory(categories)))
      .catch(() => setSnackbarOpen(true));
    dbGetBudget()
      .then((budget) => dispatch(initBudget(budget)))
      .catch(() => setSnackbarOpen(true));
  }, []);

  

  return (

    <StoreContext.Provider value={{ state, dispatch,language,setLanguage }}>
    
    <IntlProvider locale={language} messages={messages[language]}>
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
      <Snackbars type="error" open={snackbarOpen} setOpen={setSnackbarOpen} />
      </IntlProvider>
    </StoreContext.Provider>
  );
}

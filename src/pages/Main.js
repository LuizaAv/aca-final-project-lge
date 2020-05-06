import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { IntlProvider } from 'react-intl';

import { MainContext } from './mainContext';
import { useStoreContext } from '../store/storeContext';
import { useSnackbarContext } from '../components/Snackbars/snackbarContext';
import { initCategory, initBudget, editBudget } from '../store/actions';
import { dbGetBudget, dbGetCategory, rateExchange } from '../API/dbActions';
import { ERROR } from '../components/Snackbars/snackbarActions';

import Navigation from '../components/Navigation/Navigation';
import Summary from './Summary/Summary';
import Categories from './Categories/Categories';
import History from './History/History';
import Charts from './Charts/Charts';
import Help from './Help/Help';
import Snackbars from '../components/Snackbars/Snackbars';
import messages from '../languages/messages';
import useStyles from './Main.style';

export default function Main() {
  const classes = useStyles();
  const [language, setLanguage] = useState('EN');
  const [currency, setCurrency] = useState('USD');
  const [loading, setLoading] = useState(true);
  const [rate, setRate] = useState({
    USD: 1, AMD: 480, RUB: 74, EUR: 0.91,
  });
  const { snackbarDispatch } = useSnackbarContext();
  const { dispatch } = useStoreContext();

  useEffect(() => {
    rateExchange()
      .then((newRate) => {
        if (newRate) setRate(newRate);
      });
  }, []);

  useEffect(() => {
    dbGetCategory()
      .then((categories) => dispatch(initCategory(categories)))
      .then(() => setLoading(false))
      .catch(() => snackbarDispatch(ERROR))
      .then(() => setLoading(false));
    dbGetBudget()
      .then((budget) => dispatch(initBudget(budget)))
      .then(() => setLoading(false))
      .catch(() => snackbarDispatch(ERROR))
      .then(() => setLoading(false));
  }, []);

  useEffect(() => {
    dbGetBudget()
      .then((budget) => budget.map((item) => dispatch(editBudget({
        ...item, amount: Math.floor(item.amount * rate[currency]),
      }))));
  }, [currency, rate]);

  return (
    <MainContext.Provider value={{
      currency, setCurrency, rate, loading, language, setLanguage,
    }}
    >
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
                <Charts />
              </Route>
              <Route path="/Help">
                <Help />
              </Route>
            </Switch>
          </div>
        </div>
        <Snackbars />
      </IntlProvider>
    </MainContext.Provider>
  );
}

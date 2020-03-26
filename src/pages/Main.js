import React, { useReducer } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import useStyles from './Main.style';

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
  const classes = useStyles();
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      <Grid container>
        <Grid item sm={2} />
        <Grid item container direction="column" spacing={1} xs={12} sm={8}>
          <Grid item>
            <AddBudget />
          </Grid>
          <Grid container justify="space-between">
            <Link to="/" className={classes.link}>
              <Button variant="outlined">Summary</Button>
            </Link>
            <Link to="/Categories" className={classes.link}>
              <Button variant="outlined">Categories</Button>
            </Link>
            <Link to="/History" className={classes.link}>
              <Button variant="outlined">History</Button>
            </Link>
          </Grid>
          <Grid container justify="center">
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
          </Grid>
        </Grid>
        <Grid item sm={2} />
      </Grid>
    </StoreContext.Provider>
  );
}

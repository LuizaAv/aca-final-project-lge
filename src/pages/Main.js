import React, { useReducer } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import { StoreContext } from '../store/storeContext';
import { reducer } from '../store/reducers';

import Summary from './Summary/Summary';
import Categories from './Categories/Categories';
import History from './History/History';
import AddBudget from '../components/AddBudget/AddBudget';

import { budget, categories } from '../API/db';

const useStyles = makeStyles({
  root: {
    // flexGrow: 1,
  },
});

const initialState = {
  categories: [...categories],
  budget: [...budget],
};

export default function Main() {
  const classes = useStyles();
  const [state, dispatch] = useReducer(reducer, initialState);
  // className={classes.root}
  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      <Grid container>
        <Grid item xs={0} sm={2} />
        <Grid ietm container direction="column" spacing={1} xs={12} sm={8}>
          <Grid item>
            <AddBudget />
          </Grid>
          <Grid item container justify="space-between">
            <Button variant="outlined">
              <Link to="/">Summary</Link>
            </Button>
            <Button variant="outlined">
              <Link to="/Categories">Categories</Link>
            </Button>
            <Button variant="outlined">
              <Link to="/History">History</Link>
            </Button>
          </Grid>
          <Grid item container justify="center">
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
        <Grid item xs={0} sm={2} />
      </Grid>
    </StoreContext.Provider>
  );
}

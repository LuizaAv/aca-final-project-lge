import React from 'react';
import { Link } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';

import AddBudget from '../AddBudget/AddBudget';
import useStyles from './Header.style';

export default function Header() {
  const classes = useStyles();

  return (
    <AppBar className={classes.appbar} position="sticky">
      <Toolbar className={classes.toolbar}>
        <nav className={classes.nav}>
          <Link to="/" className={classes.link}>
            <Button className={classes.button}>Summary</Button>
          </Link>
          <Link to="/History" className={classes.link}>
            <Button className={classes.button}>History</Button>
          </Link>
          <Link to="/Categories" className={classes.link}>
            <Button className={classes.button}>Categories</Button>
          </Link>
        </nav>
        <AddBudget />
      </Toolbar>
    </AppBar>
  );
}

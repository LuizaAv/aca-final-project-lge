import React from 'react';
import { Link } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HistoryIcon from '@material-ui/icons/History';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import CategoryIcon from '@material-ui/icons/Category';

import AddBudget from '../AddBudget/AddBudget';
import useStyles from './Header.style';

export default function Header() {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <nav>
          <Link to="/" className={classes.link}>
            <Button
              variant="outlined"
              color="secondary"
              Button
              component={Link}
            >
              Summary
            </Button>
          </Link>
          <Link to="/Categories" className={classes.link}>
            <Button variant="outlined" color="secondary">
              Categories
            </Button>
          </Link>
          <Link to="/History" className={classes.link}>
            <Button variant="outlined" color="secondary">
              History
            </Button>
          </Link>
        </nav>
        <AddBudget />
      </Toolbar>
    </AppBar>
  );
}

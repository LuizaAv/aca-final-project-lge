import React from 'react';
import { Link } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';

import AddBudget from '../AddBudget/AddBudget';
import useStyles from './Header.style';

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      {/* <AppBar position="sticky" className={classes.appBar}>
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
      </AppBar> */}
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <nav className={classes.nav}>
          <Link to="/" className={classes.link}>
            Summary
          </Link>
          <Link to="/History" className={classes.link}>
            History
          </Link>
          <Link to="/Categories" className={classes.link}>
            Categories
          </Link>
        </nav>
      </Drawer>

    </div>
  );
}

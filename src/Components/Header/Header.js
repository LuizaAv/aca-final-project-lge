import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';

import { ReactComponent as SummaryIcon } from '../../assets/icons/Summary.svg';
import { ReactComponent as HistoryIcon } from '../../assets/icons/History.svg';
import { ReactComponent as CategoriesIcon } from '../../assets/icons/Categories.svg';
import { ReactComponent as RectangleIcon } from '../../assets/icons/Rectangle.svg';
import useStyles from './Header.style';

export default function Header() {
  const classes = useStyles();
  const [path, setPath] = useState('/');

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <nav className={classes.nav}>
          <Link to="/" onClick={() => setPath('/')} className={path === '/' ? classes.activeLink : classes.link}>
            <RectangleIcon className={path === '/' ? classes.activeRectangleIcon : classes.rectangleIcon} />
            <SummaryIcon className={classes.icon} />
            Summary
          </Link>
          <Link to="/History" onClick={() => setPath('/History')} className={path === '/History' ? classes.activeLink : classes.link}>
            <RectangleIcon className={path === '/History' ? classes.activeRectangleIcon : classes.rectangleIcon} />
            <HistoryIcon className={classes.icon} />
            History
          </Link>
          <Link to="/Categories" onClick={() => setPath('/Categories')} className={path === '/Categories' ? classes.activeLink : classes.link}>
            <RectangleIcon className={path === '/Categories' ? classes.activeRectangleIcon : classes.rectangleIcon} />
            <CategoriesIcon className={classes.icon} />
            Categories
          </Link>
        </nav>
      </Drawer>
    </div>
  );
}

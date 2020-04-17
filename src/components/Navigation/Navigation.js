import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import { ReactComponent as GraphsIcon } from '../../assets/icons/Graphs.svg';
import { ReactComponent as SummaryIcon } from '../../assets/icons/Summary.svg';
import { ReactComponent as HistoryIcon } from '../../assets/icons/History.svg';
import { ReactComponent as CategoriesIcon } from '../../assets/icons/Categories.svg';
import { ReactComponent as RectangleIcon } from '../../assets/icons/Rectangle.svg';
import useStyles from './Navigation.style';

export default function Navigation() {
  const classes = useStyles();
  const matches = useMediaQuery('(min-width:1030px)');
  const [path, setPath] = useState(window.location.pathname);
  const [open, setOpen] = useState(true);

  useEffect(() => {
    setOpen(matches);
  }, [matches]);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div>
      <CssBaseline />
      <IconButton
        color="inherit"
        onClick={handleClick}
        className={matches ? classes.hide : classes.menuIcon}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        open={open}
        className={classes.drawer}
        variant={matches ? 'persistent' : 'temporary'}
        classes={{ paper: classes.drawerPaper }}
        anchor="left"
      >
        <IconButton
          color="inherit"
          onClick={handleClick}
          className={matches ? classes.hide : classes.chevronLeftIcon}
        >
          <ChevronLeftIcon />
        </IconButton>
        <Typography
          className={classes.logo}
          variant="h4"
          align="center"
        >
          Finance
        </Typography>

        <nav className={classes.nav}>
          <Link
            to="/"
            onClick={() => setPath('/')}
            className={path === '/'
              ? classes.activeLink
              : classes.link}
          >
            <RectangleIcon
              className={
                path === '/'
                  ? classes.activeRectangleIcon
                  : classes.rectangleIcon
                }
            />
            <SummaryIcon className={classes.summaryIcon} />
            Summary
          </Link>
          <Link
            to="/History"
            onClick={() => setPath('/History')}
            className={path === '/History'
              ? classes.activeLink
              : classes.link}
          >
            <RectangleIcon
              className={path === '/History'
                ? classes.activeRectangleIcon
                : classes.rectangleIcon}
            />
            <HistoryIcon className={classes.historyIcon} />
            History
          </Link>
          <Link
            to="/Categories"
            onClick={() => setPath('/Categories')}
            className={path === '/Categories'
              ? classes.activeLink
              : classes.link}
          >
            <RectangleIcon
              className={path === '/Categories'
                ? classes.activeRectangleIcon
                : classes.rectangleIcon}
            />
            <CategoriesIcon className={classes.categoriesIcon} />
            Categories
          </Link>
          <Link
            to="/Charts"
            onClick={() => setPath('/Charts')}
            className={path === '/Charts'
              ? classes.activeLink
              : classes.link}
          >
            <RectangleIcon
              className={path === '/Charts'
                ? classes.activeRectangleIcon
                : classes.rectangleIcon}
            />
            <GraphsIcon className={classes.graphsIcon} />
            Graphs
          </Link>
        </nav>
      </Drawer>
    </div>
  );
}

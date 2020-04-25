import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import { useStoreContext } from '../../store/storeContext';
import { ReactComponent as GraphsIcon } from '../../assets/icons/Graphs.svg';
import { ReactComponent as SummaryIcon } from '../../assets/icons/Summary.svg';
import { ReactComponent as HistoryIcon } from '../../assets/icons/History.svg';
import { ReactComponent as CategoriesIcon } from '../../assets/icons/Categories.svg';
import { ReactComponent as RectangleIcon } from '../../assets/icons/Rectangle.svg';
import useStyles from './Navigation.style';

export default function Navigation() {
  const classes = useStyles();
  const matches = useMediaQuery('(min-width:1030px)');
  const { currency, setCurrency } = useStoreContext();
  const { language, setLanguage } = useStoreContext();
  const [path, setPath] = useState(window.location.pathname);
  const [open, setOpen] = useState(true);

  useEffect(() => {
    setOpen(matches);
  }, [matches]);

  const handleClick = () => {
    if (!matches) {
      setOpen(!open);
    }
  };

  const handlSelectLanguage = (e) => {
    setLanguage(e.target.value);
  };

  const handlselectCurrency = (e) => {
    setCurrency(e.target.value);
  };

  const selectLanguage = ['EN', 'HY', 'RU'];
  const selectCurrency = ['USD', 'AMD', 'RUB', 'EUR'];

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
        classes={{ paper: classes.drawerPaper }}
        variant={matches ? 'persistent' : 'temporary'}
        anchor="left"
        onClick={handleClick}
      >
        <div className={classes.logo}>
          <Link
            className={classes.linkLogo}
            to="/"
            onClick={() => setPath('/')}
          >
            <Typography
              className={classes.finance}
              variant="h4"
              align="center"
            >
              Finance
            </Typography>
            <Typography
              className={classes.management}
              variant="body2"
              align="center"
            >
              management
            </Typography>
          </Link>
        </div>

        <div className={classes.tools}>
          <Select
            className={classes.select}
            classes={{ root: classes.selectRoot }}
            variant="outlined"
            value={language}
            onChange={handlSelectLanguage}
          >
            {selectLanguage.map((item) => (
              <MenuItem value={item} key={item}>
                {item}
              </MenuItem>
            ))}
          </Select>

          <Select
            className={classes.select}
            classes={{ root: classes.selectRoot }}
            variant="outlined"
            value={currency}
            onChange={handlselectCurrency}
          >
            {selectCurrency.map((item) => (
              <MenuItem value={item} key={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
        </div>

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
            <FormattedMessage id="summary" />
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
            <FormattedMessage id="history" />
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
            <FormattedMessage id="categories" />
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
            <FormattedMessage id="charts" />
          </Link>
        </nav>
      </Drawer>
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import { ROUTES } from '../../globals/routes';
import { useMainContext } from '../../pages/Main/mainContext';
import { useLanguageContext } from '../../languages/languageContext';
import { ReactComponent as GraphsIcon } from '../../assets/icons/Graphs.svg';
import { ReactComponent as SummaryIcon } from '../../assets/icons/Summary.svg';
import { ReactComponent as HistoryIcon } from '../../assets/icons/History.svg';
import { ReactComponent as CategoriesIcon } from '../../assets/icons/Categories.svg';
import { ReactComponent as RectangleIcon } from '../../assets/icons/Rectangle.svg';
import { ReactComponent as HelpIcon } from '../../assets/icons/question.svg';
import useStyles from './Navigation.style';

export default function Navigation() {
  const classes = useStyles();
  const matches = useMediaQuery('(min-width:1030px)');
  const { locale, setLanguage } = useLanguageContext();
  const { currency, setCurrency } = useMainContext();
  const [selectedPath, setSelectedPath] = useState(window.location.hash.slice(1));
  const [open, setOpen] = useState(true);

  useEffect(() => {
    setOpen(matches);
  }, [matches]);

  const handleClick = () => {
    if (!matches) {
      setOpen(!open);
    }
  };

  const handlselectCurrency = (e) => {
    setCurrency(e.target.value);
  };

  const selectLanguage = ['EN', 'HY', 'RU'];
  const selectCurrency = ['USD', 'AMD', 'RUB', 'EUR'];

  const links = [
    { route: ROUTES.summary, message: 'summary', icon: <SummaryIcon className={classes.summaryIcon} /> },
    { route: ROUTES.history, message: 'history', icon: <HistoryIcon className={classes.historyIcon} /> },
    { route: ROUTES.categories, message: 'categories', icon: <CategoriesIcon className={classes.categoriesIcon} /> },
    { route: ROUTES.charts, message: 'charts', icon: <GraphsIcon className={classes.graphsIcon} /> },
    { route: ROUTES.help, message: 'help', icon: <HelpIcon className={classes.helpIcon} /> },
  ];

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
            to={ROUTES.summary}
            onClick={() => setSelectedPath(ROUTES.summary)}
            className={classes.linkLogo}
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
              variant="body1"
              align="center"
            >
              management
            </Typography>
          </Link>
        </div>

        <nav className={classes.nav}>
          {links.map((link) => (
            <Link
              key={link.message}
              to={link.route}
              onClick={() => setSelectedPath(link.route)}
              className={selectedPath === link.route
                ? classes.activeLink
                : classes.link}
            >
              <RectangleIcon
                className={
                selectedPath === link.route
                  ? classes.activeRectangleIcon
                  : classes.rectangleIcon
                }
              />
              {link.icon}
              <FormattedMessage id={link.message} />
            </Link>
          ))}
        </nav>


        <div className={classes.tools}>
          <FormControl variant="outlined">
            <InputLabel className={classes.label}>
              <FormattedMessage id="language" />
            </InputLabel>
            <Select
              className={classes.select}
              classes={{ root: classes.selectRoot }}
              variant="outlined"
              value={locale}
              onChange={setLanguage}
              label={<FormattedMessage id="language" />}
            >
              {selectLanguage.map((item) => (
                <MenuItem value={item} key={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl variant="outlined">
            <InputLabel className={classes.label}>
              <FormattedMessage id="currency" />
            </InputLabel>
            <Select
              className={classes.select}
              classes={{ root: classes.selectRoot }}
              variant="outlined"
              value={currency}
              onChange={handlselectCurrency}
              label={<FormattedMessage id="currency" />}
            >
              {selectCurrency.map((item) => (
                <MenuItem value={item} key={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </Drawer>
    </div>
  );
}

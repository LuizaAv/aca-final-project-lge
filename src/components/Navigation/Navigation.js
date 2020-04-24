import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {FormattedMessage} from 'react-intl';
import { Button } from '@material-ui/core';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';



import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import { ReactComponent as GraphsIcon } from '../../assets/icons/Graphs.svg';
import { ReactComponent as SummaryIcon } from '../../assets/icons/Summary.svg';
import { ReactComponent as HistoryIcon } from '../../assets/icons/History.svg';
import { ReactComponent as CategoriesIcon } from '../../assets/icons/Categories.svg';
import { ReactComponent as RectangleIcon } from '../../assets/icons/Rectangle.svg';
import useStyles from './Navigation.style';
import { useStoreContext } from '../../store/storeContext';

export default function Navigation() {
  const classes = useStyles();
  const matches = useMediaQuery('(min-width:1030px)');
  const [path, setPath] = useState(window.location.pathname);
  const [open, setOpen] = useState(true);
 

  const {language,setLanguage} = useStoreContext();

  useEffect(() => {
    setOpen(matches);
  }, [matches]);

  const handleClick = () => {
    if (!matches) {
      setOpen(!open);
    }
  };
  const handleChangeLanguage=(lang)=>{
    setLanguage(lang);
   
  }
  
  



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
        <Typography
          className={classes.logo}
          variant="h4"
          align="center"
        >
          Finance
        </Typography>

        

        <Select
          className={classes.currency}
          classes={{ root: classes.selectRoot }}
          variant="outlined"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <MenuItem value="en">
            English
          </MenuItem>
          <MenuItem value="hy">
            Hayeren
          </MenuItem>
          <MenuItem value="ru">
            Rseren
          </MenuItem>
        </Select>
       
   

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
            <FormattedMessage id="Summary"  />
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
            <FormattedMessage id="History"  />
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
            <FormattedMessage id="Categories"  />
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
            <FormattedMessage id="Graphs"  />
          </Link>
        </nav>
      </Drawer>
    </div>
  );
}

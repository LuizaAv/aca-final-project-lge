import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 180;

export default makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
  },
  drawerPaper: {
    width: drawerWidth,
    boxShadow: theme.shadows[15],
  },
  logo: {
    width: '100%',
    padding: 30,
    boxShadow: '0px 7px 60px 0px #e6e8fc',
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.tertiary.main,
  },
  nav: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%',
    fontWeight: theme.typography.fontWeightBold,
    fontSize: 15,
  },
  link: {
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    marginBottom: 40,
    color: theme.palette.text.secondary,
    fill: '#ababab', // svg icon color
    '&:hover': {
      color: theme.palette.text.primary,
      fill: theme.palette.text.primary,
    },
  },
  activeLink: {
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    marginBottom: 40,
    color: theme.palette.text.primary,
    fill: theme.palette.secondary.main, // svg icon color

  },
  rectangleIcon: {
    marginRight: 17,
    fill: '#fff',
  },
  activeRectangleIcon: {
    marginRight: 17,
    fill: theme.palette.secondary.main,
  },
  summaryIcon: {
    marginRight: 17,
    height: 27,
  },
  historyIcon: {
    marginRight: 17,
    marginLeft: -4,
    height: 27,
  },
  categoriesIcon: {
    marginRight: 17,
    height: 27,
  },
  graphsIcon: {
    marginRight: 17,
    marginLeft: -1,
    height: 27,
  },
  hide: {
    display: 'none',
  },
  chevronLeftIcon: {
    position: 'absolute',
    marginLeft: '73%',
  },
  menuIcon: {
    position: 'fixed',
  },
}));

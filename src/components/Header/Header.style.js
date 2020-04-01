import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 180;

export default makeStyles({
  root: {
  //   display: 'flex',
  },
  drawer: {
    width: drawerWidth,
  },
  drawerPaper: {
    width: drawerWidth,
    boxShadow: '0 0 20px 20px #e6e8fc',
  },
  typography: {
    color: '#363D99',
    width: '100%',
    padding: 30,
    boxShadow: '0px 7px 60px 0px #e6e8fc',
    fontFamily: 'Segoe UI',
    fontWeight: 900,
  },
  nav: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%',
    fontFamily: 'Segoe UI',
    fontWeight: 900,
    fontSize: 15,
  },
  link: {
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    marginBottom: 40,
    color: '#ababab',
    // svg icon color
    fill: '#ababab',
    '&:hover': {
      color: '#545454',
      fill: '#545454',
    },
  },
  activeLink: {
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    marginBottom: 40,
    color: '#545454',
    // svg icon color
    fill: '#FF5D5D',
  },
  rectangleIcon: {
    marginRight: 17,
    fill: '#fff',
  },
  activeRectangleIcon: {
    marginRight: 17,
    fill: '#FF5D5D',
  },
  icon: {
    marginRight: 17,
  },
  graphIcon: {
    marginRight: 17,
    fontSize: 30,
  },
  activeGraphIcon: {
    color: '#FF5D5D',
    marginRight: 17,
    fontSize: 30,
  },
});

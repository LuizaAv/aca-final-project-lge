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
  },
  nav: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%',
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
});

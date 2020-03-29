import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 180;

export default makeStyles((theme) => ({
  root: {
  //   display: 'flex',
  },
  // appBar: {
  //   width: `calc(100% - 240px)`,
  //   marginLeft: 240,
  // },
  nav: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    // alignItems: 'center',
    height: '100%',
    // width: '100%',
    // position: 'absolute',
    marginLeft: 30,
    fontSize: 20,

  },
  link: {
    textDecoration: 'none',
    margin: 10,
  },
  // button: {
  //   color: '#ddd',
  //   border: '1px solid',
  //   margin: '0 20px',
  //   '&:hover': {
  //     borderColor: '#fff',
  //     color: '#fff',
  //     boxShadow: '0 0 5px #fff',
  //   },
  // },
  drawer: {
    width: drawerWidth,
    // flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: 'red',
  },
  // toolbar: {
  //   ...theme.mixins.toolbar,
  // },
}));

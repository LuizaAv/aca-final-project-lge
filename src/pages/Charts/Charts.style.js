import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    margin: 'auto',
    textAlign: 'center',
  },
  tools: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 40,
    marginLeft: 85,
    width: 370,
    [theme.breakpoints.down('md')]: {
      width: 350,
    },
    [theme.breakpoints.down('sm')]: {
      margin: 'auto',
      marginTop: 20,
      marginBottom: 20,
      width: '100%',
      justifyContent: 'space-evenly',
    },
  },
  paper: {
    width: '70%',
    padding: 20,
    margin: 'auto',
    [theme.breakpoints.down('sm')]: {
      width: '100vw',
      marginLeft: -15,
    },
  },
  progress: {
    margin: 'auto',
    zIndex: theme.zIndex.drawer + 1,
  },
}));

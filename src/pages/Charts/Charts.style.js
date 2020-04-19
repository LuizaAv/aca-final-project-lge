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
    // width: '20ch',
    // [theme.breakpoints.down('md')]: {
    //   width: 485,
    // },
    [theme.breakpoints.down('sm')]: {
      margin: 0,
      marginTop: 20,
      marginBottom: 20,
      width: '100%',
      justifyContent: 'space-evenly',
    },
    // [theme.breakpoints.down('xs')]: {
    //   flexWrap: 'wrap',
    //   height: 100,
    // },
  },
  paper: {
    width: '70%',
    padding: 20,
    margin: 'auto',
  },

}));

import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  tools: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 40,
    marginLeft: 85,
    width: 965,
    [theme.breakpoints.down('md')]: {
      width: 820,
    },
    [theme.breakpoints.down('sm')]: {
      margin: 'auto',
      marginTop: 20,
      marginBottom: 20,
      width: '100%',
      justifyContent: 'space-evenly',
      flexWrap: 'wrap',
      height: 100,
    },
    [theme.breakpoints.down('xs')]: {
      height: 150,
    },
  },
  flexContainer: {
    display: 'flex',
    alignSelf: 'center',
    flexWrap: 'wrap',
    justifyContent: 'center',
    minHeight: '55vh',
    width: 1150,
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  },
  card: {
    width: 330,
    height: 140,
    margin: '0 20px 20px 20px',
    boxShadow: theme.shadows[5],
    [theme.breakpoints.down('sm')]: {
      margin: '0 10px 10px 10px',
    },
  },
  cardItem: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  name: {
    color: theme.palette.tertiary.light,
    fontWeight: 600,
  },
  category: {
    color: theme.palette.tertiary.light,
    fontWeight: 300,
  },
  hr: {
    marginTop: 40,
    marginBottom: 10,
  },
  pagination: {
    margin: 'auto',
  },
  progress: {
    height: '55vh',
    margin: 'auto',
    zIndex: theme.zIndex.drawer + 1,
  },
}));

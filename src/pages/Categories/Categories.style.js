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
  tableContainer: {
    width: '96%',
    alignSelf: 'center',
    boxShadow: theme.shadows[5],
    paddingBottom: 50,
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  title: {
    color: theme.palette.tertiary.main,
    fontSize: 30,
    fontWeight: 900,
    marginLeft: 50,
    marginTop: 30,
    [theme.breakpoints.down('md')]: {
      marginLeft: 40,
      fontSize: 28,
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 22,
      marginLeft: 30,
    },
  },
  table: {
    width: '94%',
    margin: 'auto',
  },
  icon: {
    marginRight: 10,
    marginBottom: -4,
  },
  head: {
    fontWeight: 900,
    fontSize: 17,
    width: '20%',
    [theme.breakpoints.down('sm')]: {
      width: 0,
      fontSize: 15,
    },
  },
  tableRow: {
    transition: 'transform .2s',
    '&:hover': {
      transform: 'scale(1.01)',
      backgroundColor: '#e0ebeb',
    },
  },
  name: {
    color: theme.palette.tertiary.main,
    fontSize: 17,
    textTransform: 'capitalize',
    [theme.breakpoints.down('sm')]: {
      fontSize: 15,
    },
  },
  content: {
    fontSize: 17,
    textTransform: 'capitalize',
    [theme.breakpoints.down('sm')]: {
      fontSize: 15,
    },
  },
  progress: {
    margin: 'auto',
    zIndex: theme.zIndex.drawer + 1,
  },
}));

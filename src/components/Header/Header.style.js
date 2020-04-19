import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '77%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      flexDirection: 'column',
      height: '160px',
    },
  },
  amounts: {
    display: 'flex',
  },
  item: {
    borderLeft: '1px solid #707070',
    paddingLeft: 40,
    marginLeft: 50,
    [theme.breakpoints.down('md')]: {
      paddingLeft: 30,
      marginLeft: 40,
    },
    [theme.breakpoints.down('sm')]: {
      paddingLeft: 10,
      marginLeft: 20,
    },
  },
  current: {
    fontFamily: 'Segoe UI',
    fontSize: 30,
    textAlign: 'center',
    letterSpacing: 2,
    transform: 'scaleY(0.9)',
    [theme.breakpoints.down('md')]: {
      fontSize: 25,
    },
  },
  text: {
    fontFamily: 'Segoe UI',
    fontWeight: 300,
    fontSize: 15,
    [theme.breakpoints.down('md')]: {
      fontSize: 12,
    },
  },
  span: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  balance: {
    color: '#363D99',
    fontWeight: 900,
  },
  income: {
    color: '#2EE152',
    fontWeight: 900,
  },
  expense: {
    color: '#FF5D5D',
    fontWeight: 900,
  },
  name: {
    color: theme.palette.grey[600],
    fontFamily: 'Segoe UI',
    fontWeight: 600,
    fontSize: 23,
    textTransform: 'capitalize',
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
      fontSize: 20,
    },
  },
}));

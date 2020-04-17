import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '96%',
    [theme.breakpoints.down('sm')]: {
      alignItems: 'center',
      flexDirection: 'column',
      height: '130px',
    },
  },
  total: {
    display: 'flex',
  },
  count: {
    borderLeft: '1px solid #707070',
    paddingLeft: 40,
    marginLeft: 50,
    [theme.breakpoints.down('md')]: {
      paddingLeft: 30,
      marginLeft: 40,
    },
    [theme.breakpoints.down('sm')]: {
      paddingLeft: 20,
      marginLeft: 30,
    },
  },
  amount: {
    fontFamily: 'Segoe UI',
    fontWeight: 900,
    fontSize: 30,
    letterSpacing: 2,
    transform: 'scaleY(0.9)',
    [theme.breakpoints.down('md')]: {
      fontSize: 25,
    },
    // [theme.breakpoints.down('sm')]: {
    //   fontSize: 20,
    // },
  },
  balance: {
    color: '#363D99',
  },
  income: {
    color: '#2EE152',
  },
  expense: {
    color: '#FF5D5D',
  },
  name: {
    color: '#545454',
    fontFamily: 'Segoe UI',
    fontWeight: 900,
    fontSize: 16,
    [theme.breakpoints.down('md')]: {
      fontSize: 14,
    },
    // [theme.breakpoints.down('sm')]: {
    //   fontSize: 10,
    // },
  },
}));

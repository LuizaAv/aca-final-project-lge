import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '96%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
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
      paddingLeft: 10,
      marginLeft: 20,
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
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
      fontSize: 13,
    },
    // [theme.breakpoints.down('sm')]: {
    //   fontSize: 10,
    // },
  },
}));

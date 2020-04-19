import { makeStyles } from '@material-ui/core/styles';
import { red, lightGreen } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  addButtons: {
    display: 'flex',
    justifyContent: 'space-between',
    width: 290,
    marginRight: 30,
    [theme.breakpoints.down('md')]: {
      width: 250,
    },
    [theme.breakpoints.down('sm')]: {
      margin: 'auto',
      marginLeft: 4,
      width: 260,
    },
  },
  addIncome: {
    color: '#000',
    fontSize: 16,
    '&:hover': {
      backgroundColor: lightGreen.A200,
    },
    [theme.breakpoints.down('md')]: {
      fontSize: 14,
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 10,
    },
  },
  addExpense: {
    color: '#000',
    fontSize: 16,
    '&:hover': {
      backgroundColor: red.A100,
    },
    [theme.breakpoints.down('md')]: {
      fontSize: 14,
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 10,
    },
  },
  dialog: {
    [theme.breakpoints.down('sm')]: {
      width: 350,
      height: 440,
      margin: 'auto',
    },
    [theme.breakpoints.between('sm', 'md')]: {
      width: 400,
      height: 540,
      margin: 'auto',
    },
  },
  titleIncome: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      height: 50,
    },
  },
  titleExpence: {
    backgroundColor: theme.palette.secondary.light,
    color: theme.palette.common.white,
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      height: 50,
    },
  },
  item: {
    width: '80%',
    height: '100%',
    margin: 'auto',
    marginTop: 20,
    marginBottom: 15,
    [theme.breakpoints.down('sm')]: {
      width: '55%',
      height: '80%',
      margin: 'auto',
      marginTop: 5,
      marginBottom: 10,
    },
  },
  date: {
    width: '50%',
    margin: 'auto',
  },
  dialogAction: {
    margin: 'auto',
  },
  actionButton: {
    margin: 15,
    width: 100,
  },
}));

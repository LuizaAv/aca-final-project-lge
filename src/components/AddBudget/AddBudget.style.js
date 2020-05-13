import { makeStyles } from '@material-ui/core/styles';
import { red, lightGreen } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  addButtons: {
    display: 'flex',
    justifyContent: 'space-between',
    width: 290,
    marginRight: 30,
    [theme.breakpoints.down('sm')]: {
      margin: 'auto',
      marginLeft: 4,
    },
  },
  addIncome: {
    color: '#000',
    fontSize: 16,
    width: 135,
    '&:hover': {
      backgroundColor: lightGreen.A200,
    },
    [theme.breakpoints.down('md')]: {
      fontSize: 14,
    },

  },
  addExpense: {
    color: '#000',
    fontSize: 16,
    width: 135,
    '&:hover': {
      backgroundColor: red.A100,
    },
    [theme.breakpoints.down('md')]: {
      fontSize: 14,
    },
  },
  titleIncome: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    textAlign: 'center',
  },
  titleExpense: {
    backgroundColor: theme.palette.secondary.light,
    color: theme.palette.common.white,
    textAlign: 'center',
  },
  item: {
    width: '80%',
    margin: 'auto',
    marginTop: 20,
    marginBottom: 15,
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

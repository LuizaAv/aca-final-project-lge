import { makeStyles } from '@material-ui/core/styles';
import { red, lightGreen } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  addIncome: {
    marginRight: 30,
    color: '#000',
    '&:hover': {
      backgroundColor: lightGreen.A200,
    },
  },
  addExpense: {
    marginRight: 30,
    color: '#000',
    '&:hover': {
      backgroundColor: red.A100,
    },
  },
  titleIncome: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    textAlign: 'center',
  },
  titleExpence: {
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

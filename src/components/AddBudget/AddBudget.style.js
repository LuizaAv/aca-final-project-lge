import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  addButton: {
    marginRight: 30,
    fontWeight: 600,
  },
  titleIncome: {
    backgroundColor: theme.palette.primary.light,
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

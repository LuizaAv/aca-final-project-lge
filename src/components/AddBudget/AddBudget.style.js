import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  addButton: {
    borderRadius: 25,
    padding: '7px 20px',
    textTransform: 'lowercase',
    fontFamily: 'Segoe UI',
    fontWeight: 900,
    color: '#fff',
    boxShadow: '0 5px 15px -4px #000',
    marginRight: 30,
  },
  income: {
    backgroundColor: '#2EE152',
    '&:hover': {
      backgroundColor: '#20ef46',
      boxShadow: '0 5px 15px -4px #108023',
    },
  },
  expense: {
    backgroundColor: '#FF5D5D',
    '&:hover': {
      backgroundColor: '#ff1a1a',
      boxShadow: '0 5px 15px -4px #800000',
    },
  },
  dialog: {
    borderRadius: 30,
  },
  titleIncome: {
    width: '100%',
    backgroundColor: '#2EE152',
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'Segoe UI',
  },
  titleExpence: {
    width: '100%',
    backgroundColor: '#FF5D5D',
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'Segoe UI',
  },
  itemSize: {
    width: '80%',
    margin: 'auto',
    marginTop: 20,
    marginBottom: 15,
    color: 'white',
  },
  date: {
    width: '40%',
    margin: 'auto',
  },
  dialogAction: {
    margin: 'auto',
  },
  actionButton: {
    margin: 15,
    borderRadius: 30,
    width: 100,
    fontWeight: 600,
  },
});

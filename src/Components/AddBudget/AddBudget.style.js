import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  addButton: {
    borderRadius: 25,
    padding: '7px 20px',
    textTransform: 'lowercase',
    fontFamily: 'Segoe UI',
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
  title: {
    margin: 'auto',
  },
  itemSize: {
    width: '80%',
    margin: 'auto',
    marginBottom: 15,
    backgroundColor: '#85adad',
    borderRadius: 10,
    color: 'white',
  },
  date: {
    width: '40%',
    margin: 'auto',
  },
  flexContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  buttons: {
    alignItems: 'center',
    flexWrap: 'wrap',
    margin: 10,
    backgroundColor: '#466d6d',
    borderRadius: 15,
  },
  button: {
    color: 'white',
    textDecoration: 'none',
    border: '3px solid #ffffff',
  },
  addbudget: {
    display: 'flex',
    backgroundColor: 'yellow',
  },
  dialog: {
    backgroundColor: 'yellow',
  },
});

import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
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
}));

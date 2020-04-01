import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  title: {
    margin: 'auto',
  },
  itemSize: {
    width: '80%',
    margin: 'auto',
    marginBottom: 15,
  },
  button: {
    borderRadius: 25,
    padding: '6px 20px',
    fontSize: 16,
    backgroundColor: '#fff',
    color: '#000',
    textTransform: 'none',
    '&:hover': {
      borderColor: '#000',
      backgroundColor: '#fff',
    },
  },
});

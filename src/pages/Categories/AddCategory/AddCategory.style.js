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
    padding: '7px 20px',
    fontFamily: 'Segoe UI',
    backgroundColor: '#fff',
    textTransform: 'none',
    '&:hover': {
      borderColor: '#000',
      backgroundColor: '#fff',
    },
  },
});

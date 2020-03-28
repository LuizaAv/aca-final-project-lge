import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: {

  },
  nav: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    position: 'absolute',

  },
  link: {
    textDecoration: 'none',
  },
  button: {
    color: '#ddd',
    border: '1px solid',
    margin: '0 20px',
    '&:hover': {
      borderColor: '#fff',
      color: '#fff',
      boxShadow: '0 0 5px #fff',
    },
  },
}));

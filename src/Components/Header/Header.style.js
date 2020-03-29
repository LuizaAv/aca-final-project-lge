import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: {

  },
  appbar:{
    backgroundColor:'##9666ff',
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
    border: '1px solid white',
    margin: '0 30px',
    '&:hover': {
      borderColor: '#fff',
      color: '#fff',
      boxShadow: '0 0 5px #fff',
    },
  },
}));

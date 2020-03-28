import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  link: {
    textDecoration: 'none',
  },
  totalPage:{
    display: 'flex',
    flexDirection: 'column',
  },
  flexContainer:{
    display: 'flex',
    justifyContent: 'center',
  },
  buttons:{
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    borderRadius: 15,
  },
  button: {
    color: 'white',
    margin: 10,
    textDecoration: 'none',
    backgroundColor: '#466d6d',
    border: '3px solid #ffffff',
  }
}));

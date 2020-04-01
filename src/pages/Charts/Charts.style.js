import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
  flexContainer: {
    display: 'flex',
    height: 600,
    width: 1000,
  },
  total:{
    height: 100,
    width: 230,
    borderRadius: 10,
    fontSize: 22,
    color: 'grey',
    border: '3px solid red',
    textAlign: 'center'
  }
  
}));

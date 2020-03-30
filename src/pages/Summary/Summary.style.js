import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
  head: {
    backgroundColor: '#466d6d',
    color: 'white',
    fontSize: 25,
    fontWeight:900,
    height:43,

  },
  flexContainer: {
    display: 'flex',
    justifyContent: 'center',
    margin:12,
  },
  table: {
    width: 600,
    marginTop:10,
  },

  tableRow: {
    padding: 10,
    margin: 5,
    transition: 'transform .4s',
    '&:hover': {
      transform: 'scale(1.1)',
      backgroundColor: '#e0ebeb',
    },
  },
}));

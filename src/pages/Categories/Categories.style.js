import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  head: {
    backgroundColor: '#466d6d',
    color: 'white',
    fontSize: 20,
  },
  flexContainer: {
    display: 'flex',
    justifyContent: 'center',
    padding:12,
    
  },
  table: {
    width: 600,
    marginTop:-5,
  },

  tableRow: {
    padding: 10,
    margin: 5,
    transition: 'transform .2s',
    '&:hover': {
      transform: 'scale(1.1)',
      backgroundColor: '#e0ebeb',
    },
  },
  moneyIcon: {
    alignItems: 'baseline',
    color: '#white',
   
  },
}));

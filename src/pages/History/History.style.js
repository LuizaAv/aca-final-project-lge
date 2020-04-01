import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  card: {
    float: 'left',
    height: 160,
    width: 380,
    borderRadius: 10,
    margin: 10,
    color: '#466d6d',
    '&:hover': {
      backgroundColor: '#f2f3f9',
      
    },
  },
  flexContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    margin: 6,
    
  },
  nameAmount: {
    display: 'flex',
    height: 60,
    width: 350,
    justifyContent: 'space-between',
    color:'#2F4F4F',
    textShadow:'1px 0px black'
    
  },
  categoryDate: {
    display: 'flex',
    height: 50,
    width: 350,
    justifyContent: 'space-between',
  },
  icons: {
    color: '#466d6d',
   
  },
  tools:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 49,
    width: 330,
    marginLeft:419,
   
  },
  total:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    
  },
  
}));

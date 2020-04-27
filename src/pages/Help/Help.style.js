import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        width: '75%',
        margin:'auto',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
          },
      },
      heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
        color:'red',
       
      },
    h1:{
        color:'#3949ab', 
        textAlign:'center',
         
    },
    paragraph:{
     padding:10,
     textAlign:'justify'
    }
   
    
}));

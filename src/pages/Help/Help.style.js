import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        width: '75%',
        margin:'auto',
        marginTop:'100px',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
          },
      },
      heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
        fontWeight:700,
        color:'#3949ab',
        fontSize:'19px',
        '&:hover': {
            transform: 'scale(1.3)',
            // backgroundColor: '#ffebee',
            width:'100%',
            marginLeft:30,
          },
       
      },
    h1:{
        color:'#3949ab', 
        textAlign:'center',
         
    },
    paragraph:{
     padding:10,
     textAlign:'justify',
     fontWeight:700,
    }
   
    
}));

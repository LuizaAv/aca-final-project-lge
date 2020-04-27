import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    width: '75%',
    margin: 'auto',
    marginTop: '100px',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  heading: {
    fontSize: theme.typography.pxToRem(19),
    flexBasis: '33.33%',
    flexShrink: 0,
    fontWeight: 700,
    color: '#3949ab',
    '&:hover': {
      transform: 'scale(1.1)',
      width: '100%',
      marginLeft: 10,
    },
  },
  h1: {
    color: '#3949ab',
    textAlign: 'center',

  },
  paragraph: {
    padding: 10,
    textAlign: 'justify',
    fontWeight: 700,
  },


}));

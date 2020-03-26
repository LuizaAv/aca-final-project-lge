import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  card: {
    width: 500,
    border: '1.5px solid black',
    borderRadius: 10,
    '&:hover': {
      backgroundColor: '#00000075',
    },
  },
  fade: {
    position: 'absolute',
    width: 500,
    margin: 'auto',
  },
}));

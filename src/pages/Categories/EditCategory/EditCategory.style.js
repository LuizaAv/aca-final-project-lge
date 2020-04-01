import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(({
  title: {
    margin: 'auto',
  },
  itemSize: {
    width: '80%',
    margin: 'auto',
    marginBottom: 15,
  },
  iconButton: {
    margin: -20,
    marginRight: 15,
  },
  icon: {
    '&:hover': {
      transform: 'scale(1.2)',
    },
  },
}));

import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(({
  iconButton: {
    margin: -20,
  },
  icon: {
    '&:hover': {
      transform: 'scale(1.2)',
    },
  },
  dialog: {
    borderRadius: 30,
  },
  dialogAction: {
    margin: 'auto',
  },
  actionButton: {
    margin: '0 30px',
    borderRadius: 30,
    width: 100,
  },
}));

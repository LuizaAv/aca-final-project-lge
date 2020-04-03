import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  iconButton: {
    margin: -20,
    marginRight: 0,
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
    borderRadius: 30,
    width: 100,
    margin: '0 30px',
  },
});

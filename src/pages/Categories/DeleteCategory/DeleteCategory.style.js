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
  dialogTitle: {
    fontSize: 20,
    textAlign: 'center',
  },
  dialogAction: {
    marginTop: -10,
    marginBottom: 10,
    margin: 'auto',
  },
  actionButton: {
    margin: '0 30px',
    borderRadius: 30,
    width: 80,
    fontWeight: '600',
  },
}));

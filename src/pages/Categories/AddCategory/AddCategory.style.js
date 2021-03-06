import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  button: {
    width: '20ch',
    fontSize: 16,
    color: '#000',
    borderColor: '#9fa8da',
    '&:hover': {
      backgroundColor: '#8c9eff',
      borderColor: '#3f51b5',
    },
    [theme.breakpoints.down('md')]: {
      fontSize: 14,
    },
  },
  dialog: {
    borderRadius: 30,
  },
  title: {
    width: '100%',
    backgroundColor: '#5c6bc0',
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'Segoe UI',
    marginBottom: 15,
  },
  itemSize: {
    width: '80%',
    margin: 'auto',
    marginBottom: 15,
  },
  dialogAction: {
    margin: 'auto',
  },
  actionButton: {
    margin: 15,
    borderRadius: 30,
    width: 100,
    fontWeight: 600,
  },
  colorPicker: {
    margin: 'auto',
  },
  buttonColor: {
    fontWeight: 600,
    textShadow: '-1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff',
  },
}));

import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  button: {
    borderRadius: 25,
    height: 40,
    width: 168,
    fontSize: 16,
    marginLeft: 5,
    backgroundColor: '#fff',
    color: '#000',
    textTransform: 'none',
    '&:hover': {
      borderColor: '#000',
      backgroundColor: '#fff',
    },
  },
  dialog: {
    borderRadius: 30,
  },
  title: {
    width: '100%',
    backgroundColor: '#5F80D8',
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
  },
});

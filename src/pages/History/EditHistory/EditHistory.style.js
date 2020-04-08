import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
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
  date: {
    width: '40%',
    margin: 'auto',
  },
  iconButton: {
    margin: -20,
    marginRight: 20,
    // color: '#ffa726',
  },
  icon: {
    '&:hover': {
      transform: 'scale(1.2)',
    },
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
});

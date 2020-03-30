import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  speedDial: {
    position: 'absolute',
    bottom: theme.spacing(-0.5),
    right: theme.spacing(6),
  },
  speedDialAction: {
    background: theme.palette.primary.main,
    width: 60,
    height: 60,
    '&:hover': {
      backgroundColor: '#2979ff',
    },
  },

  title: {
    margin: 'auto',
  },
  itemSize: {
    width: '80%',
    margin: 'auto',
    marginBottom: 15,
    color: 'white',
  },
  date: {
    width: '40%',
    margin: 'auto',
  },
  flexContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  buttons: {
    alignItems: 'center',
    flexWrap: 'wrap',
    margin: 10,
    backgroundColor: '#466d6d',
    borderRadius: 15,
  },
  button: {
    color: 'white',
    textDecoration: 'none',
    border: '3px solid #ffffff',
  },
  addbudget: {
    display: 'flex',
    backgroundColor: 'yellow',
  },
  dialog: {
    backgroundColor: 'yellow',
  },
 
}));

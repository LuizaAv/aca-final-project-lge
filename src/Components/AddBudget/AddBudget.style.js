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
  button: {
    color: '#E0EBEB',
    border: '1px solid',
  },
  title: {
    margin: 'auto',
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
}));

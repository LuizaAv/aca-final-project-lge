import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  navigation: {
    flexShrink: 0,
  },
  content: {
    flexGrow: 1,
    height: 'auto',
    minHeight: '100vh',
    backgroundColor: '#f2f3f9',
    padding: theme.spacing(3),
  },
}));

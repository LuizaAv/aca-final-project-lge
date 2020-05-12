import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  progress: {
    position: 'fixed',
    left: '50%',
    top: '50%',
    zIndex: theme.zIndex.drawer + 1,
  },
}));

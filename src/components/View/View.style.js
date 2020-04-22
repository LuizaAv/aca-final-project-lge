import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  select: {
    width: '20ch',
    height: 40,
    fontSize: 16,
    [theme.breakpoints.down('md')]: {
      fontSize: 14,
      height: 35,
    },
  },
  label: {
    fontSize: 16,
    [theme.breakpoints.down('md')]: {
      fontSize: 14,
    },
  },
  selectRoot: {
    '&:focus': {
      background: 'none',
    },
  },
}));

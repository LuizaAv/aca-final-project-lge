import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  select: {
    width: '20ch',
    height: 40,
    fontSize: 16,
    [theme.breakpoints.down('md')]: {
      fontSize: 14,
      // width: '20ch',
      height: 35,
    },
    // [theme.breakpoints.down('sm')]: {
    //   fontSize: 10,
    //   width: '24ch',
    //   height: 27,
    // },
  },
  label: {
    fontSize: 16,
    [theme.breakpoints.down('md')]: {
      fontSize: 14,
    },
    // [theme.breakpoints.down('sm')]: {
    //   fontSize: 10,
    // },
  },
  // item: {
  //   fontSize: 16,
  //   [theme.breakpoints.down('md')]: {
  //     fontSize: 13,
  //   },
  //   [theme.breakpoints.down('sm')]: {
  //     fontSize: 10,
  //   },
  // },
  selectRoot: {
    '&:focus': {
      background: 'none',
    },
  },
}));

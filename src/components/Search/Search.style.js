import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  search: {
    '& > *': {
      width: '20ch',
      fontSize: 16,
    },
    [theme.breakpoints.down('md')]: {
      '& > *': {
        fontSize: 14,
        // width: '22ch',
        height: 35,
      },
    },
    // [theme.breakpoints.down('sm')]: {
    //   '& > *': {
    //     fontSize: 10,
    //     width: '24ch',
    //     height: 27,
    //   },
    // },
  },
}));

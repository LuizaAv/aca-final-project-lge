import { makeStyles } from '@material-ui/core/styles';
import { findByLabelText } from '@testing-library/react';

export default makeStyles({
  total: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  tools: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 40,
    width: 330,
  },
  root: {
    // display: 'flex',
    // flexDirection: 'column',
    // alignItems: 'stretch',
    // alignContent: 'stretch',
    // backgroundColor: 'red',
    // justifyContent: 'center',
    // alignItems: 'center',
    // height: 700
  },
  head: {
    // backgroundColor: '#466d6d',
    // color: 'white',
    // fontSize: 20,
  },
  flexContainer: {
    // display: 'flex',
    // justifyContent: 'center',
  },
  table: {
    // flexBasis: "30%",
    // width: 550,
    // marginTop: 10,
  },

  tableRow: {
    // padding: 10,
    // margin: 5,
    // transition: 'transform .2s',
    // '&:hover': {
    //   transform: 'scale(1.1)',
    //   backgroundColor: '#e0ebeb',
    // },
  },
});

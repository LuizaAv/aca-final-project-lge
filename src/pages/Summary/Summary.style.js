import { makeStyles, responsiveFontSizes } from '@material-ui/core/styles';
import { findByLabelText } from '@testing-library/react';

export default makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
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
  tableContainer: {
    borderRadius: 30,
    width: '94%',
    alignSelf: 'center',
  },
  title: {
    color: '#363D99',
    fontFamily: 'Segoe UI',
    fontSize: 30,
    fontWeight: 900,
    marginLeft: 30,
    marginTop: 30,
  },
  table: {
    // width: '90%',
  },
  down: {
    color: '#FF5D5D',
    marginRight: 10,
  },
  up: {
    color: '#2EE152',
    marginRight: 10,
  },
  head: {
    fontFamily: 'Segoe UI',
    fontWeight: 900,
    fontSize: 17,
    // backgroundColor: '#466d6d',
    // color: 'white',
    // fontSize: 20,
  },
  content: {
    fontFamily: 'Segoe UI',
    fontWeight: 600,
    fontSize: 17,
  },
  category: {
    color: '#363D99',
    fontWeight: 600,
    fontSize: 17,
  },
  flexContainer: {
    // display: 'flex',
    // justifyContent: 'center',
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

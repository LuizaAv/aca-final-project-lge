import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  tools: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 40,
    marginLeft: 85,
    width: 568,
    [theme.breakpoints.down('md')]: {
      width: 485,
    },
    [theme.breakpoints.down('sm')]: {
      margin: 0,
      marginTop: 20,
      marginBottom: 20,
      width: '100%',
      justifyContent: 'space-evenly',
    },
    [theme.breakpoints.down('xs')]: {
      flexWrap: 'wrap',
      height: 100,
    },
  },
  tableContainer: {
    width: '70%',
    alignSelf: 'center',
    boxShadow: theme.shadows[5],
    paddingBottom: 50,
    marginLeft: '-10%',
    [theme.breakpoints.down('sm')]: {
      width: '90%',
      margin: 'auto',
    },
    [theme.breakpoints.between('sm', 'md')]: {
      width: '85%',
      marginLeft: '13%',
    },
  },
  title: {
    color: theme.palette.tertiary.main,
    fontSize: 30,
    fontWeight: 900,
    marginLeft: 50,
    marginTop: 30,
    [theme.breakpoints.down('sm')]: {
      fontSize: 24,
    },
    [theme.breakpoints.between('sm', 'md')]: {
      fontSize: 28,
    },
  },
  table: {
    width: '94%',
    margin: 'auto',
  },
  icon: {
    marginRight: 10,
    marginBottom: -4,
  },
  head: {
    fontWeight: 900,
    fontSize: 17,
    width: '20%',
  },
  content: {
    fontSize: 17,
    textTransform: 'capitalize',
  },
  category: {
    color: theme.palette.tertiary.main,
    fontSize: 17,
    textTransform: 'capitalize',
  },
  tableRow: {
    transition: 'transform .2s',
    '&:hover': {
      transform: 'scale(1.01)',
      backgroundColor: '#e0ebeb',
    },
  },
}));

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
    width: 765,
    [theme.breakpoints.down('md')]: {
      width: 718,
    },
    [theme.breakpoints.down('sm')]: {
      margin: 'auto',
      marginTop: 20,
      marginBottom: 20,
      width: '100%',
      justifyContent: 'space-evenly',
    },
    [theme.breakpoints.down('xs')]: {
      flexWrap: 'wrap',
      height: 110,
    },
  },
  flexContainer: {
    display: 'flex',
    alignSelf: 'center',
    flexWrap: 'wrap',
    justifyContent: 'center',
    minHeight: '60vh',
  },
  card: {
    width: 330,
    height: 140,
    margin: '0 20px 40px 20px',
    boxShadow: theme.shadows[5],
  },
  cardItem: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  name: {
    color: theme.palette.tertiary.light,
    fontWeight: 600,
  },
  category: {
    color: theme.palette.tertiary.light,
    fontWeight: 300,
  },
  date: {

  },
  hr: {
    marginTop: 40,
    marginBottom: 10,
  },
  pagination: {
    margin: 'auto',
  },
}));

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
    width: 370,
  },
  tableContainer: {
    width: '92%',
    alignSelf: 'center',
    boxShadow: theme.shadows[5],
    paddingBottom: 50,
  },
  title: {
    color: theme.palette.tertiary.main,
    fontSize: 30,
    fontWeight: 900,
    marginLeft: 50,
    marginTop: 30,
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

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
    width: 330,
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

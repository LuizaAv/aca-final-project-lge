import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    display: 'flex',
    // alignItems: 'center',
    justifyContent: 'flex-end',
    width: '96%',
  },
  tools: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 30,
    marginLeft: 85,
    width: 300,
  },
  tableContainer: {
    borderRadius: 30,
    width: '92%',
    alignSelf: 'center',
  },
  title: {
    color: '#363D99',
    fontFamily: 'Segoe UI',
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
    fontFamily: 'Segoe UI',
    fontWeight: 900,
    fontSize: 17,
    width: '20%',
  },
  content: {
    fontFamily: 'Segoe UI',
    fontSize: 17,
  },
  name: {
    color: '#363D99',
    fontSize: 17,
  },

  tableRow: {
    padding: 10,
    margin: 5,
    transition: 'transform .2s',
    '&:hover': {
      transform: 'scale(1.1)',
      backgroundColor: '#e0ebeb',
    },
  },
}));

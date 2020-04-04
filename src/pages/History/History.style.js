import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '96%',
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
  },
  card: {
    height: 160,
    width: 330,
    borderRadius: 20,
    margin: '0 20px 40px 20px',
    color: '#466d6d',
    boxShadow: '0px 0px 5px 5px #C0C0C0',
  },
  nameAmount: {
    display: 'flex',
    justifyContent: 'space-between',
    color: '#2F4F4F',
    textShadow: '1px 0px black',
  },
  categoryDate: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  hr: {
    marginTop: '70px',
  },
}));

import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  card: {
    float: 'left',
    height: 170,
    width: 480,
    border: '1.5px solid #466d6d',
    borderRadius: 10,
    margin: 10,
    color: '#466d6d',
    '&:hover': {
      backgroundColor: '#e0ebeb',
    },
  },
  fade: {
    position: 'absolute',
    width: 500,
    left: '46%',
    right: '46%',
  },
  flexContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    margin: 5,
  },
  nameAmount: {
    display: 'flex',
    height: 50,
    width: 350,
    justifyContent: 'space-between',
  },
  categoryDate: {
    display: 'flex',
    height: 50,
    width: 350,
    justifyContent: 'space-between',
  },
  icons: {
    color: '#466d6d',
  },
}));

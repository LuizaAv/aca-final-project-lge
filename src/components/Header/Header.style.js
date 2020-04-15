import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '96%',
  },
  total: {
    display: 'flex',
  },
  count: {
    borderLeft: '1px solid #707070',
    paddingLeft: 40,
    marginLeft: 50,
  },
  amount: {
    fontFamily: 'Segoe UI',
    fontWeight: 900,
    fontSize: 30,
    letterSpacing: 2,
    transform: 'scaleY(0.9)',
  },
  balance: {
    color: '#363D99',
  },
  income: {
    color: '#2EE152',
  },
  expense: {
    color: '#FF5D5D',
  },
  name: {
    color: '#545454',
    fontFamily: 'Segoe UI',
    fontWeight: 900,
  },
});

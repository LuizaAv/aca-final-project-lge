import React from 'react';
import propTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import SortIcon from '@material-ui/icons/Sort';

const useStyles = makeStyles({
  select: {
    width: 150,
    height: 40,
    marginLeft: 5,
    textAlign: 'center',
    border: '3px solid #ffffff',
  },
  menuItem: {
    justifyContent: 'center',
    color: '#466d6d',
    textDecoration: 'none',
  },
  total: {
    display: 'flex',
  },
  icon: {
    margin: 5,
  },
});

export default function Sort({ isAscending, setIsAscending }) {
  const classes = useStyles();
  const handleChange = () => {
    setIsAscending(!isAscending);
  };

  return (
    <div className={classes.total}>
      <div className={classes.icon}>
        <SortIcon />
      </div>
      <FormControlLabel
        control={(
          <Select
            className={classes.select}
            variant="outlined"
            value='Sort'
            onChange={handleChange}
          >
            <MenuItem className={classes.menuItem} value="ascending order">
              Ascending Order
            </MenuItem>
            <MenuItem className={classes.menuItem} value="descending order">
              Descending Order
            </MenuItem>
          </Select>
        )}
        label="Sort"
        labelPlacement="start"
      />
    </div>
  );
}

Sort.propTypes = {
  isAscending: propTypes.bool.isRequired,
  setIsAscending: propTypes.func.isRequired,
};

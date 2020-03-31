import React from 'react';
import propTypes from 'prop-types';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import useStyles from './Sort.style';

export default function Sort({ isAscending, setIsAscending }) {
  const classes = useStyles();
  const handleChange = () => {
    setIsAscending(!isAscending);
  };

  return (
    <Select
      className={classes.select}
      variant="outlined"
      defaultValue="ascending"
      onChange={handleChange}
    >
      <MenuItem className={classes.menuItem} value="ascending">
        Ascending Order
      </MenuItem>
      <MenuItem className={classes.menuItem} value="descending">
        Descending Order
      </MenuItem>
    </Select>

  );
}

Sort.propTypes = {
  isAscending: propTypes.bool.isRequired,
  setIsAscending: propTypes.func.isRequired,
};

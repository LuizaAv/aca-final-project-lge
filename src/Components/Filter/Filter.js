import React from 'react';
import propTypes from 'prop-types';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import useStyles from './Filter.style';

export default function Filter({ filterType, setFilterType }) {
  const classes = useStyles();

  const handleChange = (e) => {
    setFilterType(e.target.value);
  };

  const select = [
    { value: 'all', name: 'All' },
    { value: 'expense', name: 'Expense' },
    { value: 'income', name: 'Income' },
  ];

  return (
    <Select
      className={classes.select}
      variant="outlined"
      value={filterType}
      onChange={handleChange}
    >
      {select.map((item) => (
        <MenuItem key={item.name} className={classes.menuItem} value={item.value}>
          {item.name}
        </MenuItem>
      ))}
    </Select>
  );
}

Filter.propTypes = {
  filterType: propTypes.string.isRequired,
  setFilterType: propTypes.func.isRequired,
};

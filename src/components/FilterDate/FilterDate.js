import React from 'react';
import propTypes from 'prop-types';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import useStyles from './FilterDate.style';


export default function FilterDate({ filterDate, setFilterDate }) {
  const classes = useStyles();

  const select = [
    { value: 'all', name: 'Whole Period' },
    { value: 'daily', name: 'Daily' },
    { value: 'monthly', name: 'Monthly' },
    { value: 'yearly', name: 'Yearly' },
  ];

  const handleChange = (e) => {
    setFilterDate(e.target.value);
  };

  return (
    <div>
      <Select
        className={classes.select}
        variant="outlined"
        value={filterDate}
        onChange={handleChange}
      >
        {select.map((item) => (
          <MenuItem key={item.name} value={item.value}>
            {item.name}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
}

FilterDate.propTypes = {
  setFilterDate: propTypes.func.isRequired,
  filterDate: propTypes.string.isRequired,
};

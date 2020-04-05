import React from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import useStyles from './DateFilter.style';


export default function DateFilter({ dateFilter, setDateFilter }) {
  const classes = useStyles();

  const select = [
    { value: 'all', name: 'Whole Period' },
    { value: 'daily', name: 'Daily' },
    { value: 'monthly', name: 'Monthly' },
    { value: 'yearly', name: 'Yearly' },
  ];

  const handleChange = (e) => {
    setDateFilter(e.target.value);
  };

  return (
    <div>
      <Select
        className={classes.select}
        variant="outlined"
        value={dateFilter}
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

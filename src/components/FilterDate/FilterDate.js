import React from 'react';
import propTypes from 'prop-types';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
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
      <FormControl variant="outlined">
        <InputLabel>Date filter</InputLabel>
        <Select
          className={classes.select}
          value={filterDate}
          onChange={handleChange}
          label="Date filter"
        >
          {select.map((item) => (
            <MenuItem key={item.name} value={item.value}>
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

FilterDate.propTypes = {
  setFilterDate: propTypes.func.isRequired,
  filterDate: propTypes.string.isRequired,
};

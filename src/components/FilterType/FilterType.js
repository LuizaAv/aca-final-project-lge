import React from 'react';
import propTypes from 'prop-types';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import useStyles from './FilterType.style';

export default function FilterType({ filterType, setFilterType }) {
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
    <FormControl variant="outlined">
      <InputLabel className={classes.label}>
        Type filter
      </InputLabel>
      <Select
        className={classes.select}
        classes={{ root: classes.selectRoot }}
        variant="outlined"
        value={filterType}
        onChange={handleChange}
        label="Type filter"
      >
        {select.map((item) => (
          <MenuItem
            className={classes.item}
            key={item.name}
            value={item.value}
          >
            {item.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

FilterType.propTypes = {
  filterType: propTypes.string.isRequired,
  setFilterType: propTypes.func.isRequired,
};

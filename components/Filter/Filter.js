import React from 'react';
import propTypes from 'prop-types';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  select: {
    width: 150,
    height: 35,
    marginLeft: 5,
    textAlign: 'center',
  },
  menuItem: {
    justifyContent: 'center',
  },
});

export default function Filter({ filterType, setFilterType }) {
  const classes = useStyles();

  const handleChange = (e) => {
    setFilterType(e.target.value);
  };

  return (
    <>
      <FormControlLabel
        control={(
          <Select
            className={classes.select}
            variant="outlined"
            value={filterType}
            onChange={handleChange}
          >
            <MenuItem className={classes.menuItem} value="all">All</MenuItem>
            <MenuItem className={classes.menuItem} value="expense">Expense</MenuItem>
            <MenuItem className={classes.menuItem} value="income">Income</MenuItem>
          </Select>
        )}
        label="Filter"
        labelPlacement="start"
      />
    </>
  );
}

Filter.propTypes = {
  filterType: propTypes.string.isRequired,
  setFilterType: propTypes.func.isRequired,
};

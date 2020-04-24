import React from 'react';
import propTypes from 'prop-types';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import useStyles from './ChartType.style';

export default function ChartType({ type, setType }) {
  const classes = useStyles();

  const handleChange = (e) => {
    setType(e.target.value);
  };

  return (
    <FormControl variant="outlined">
      <InputLabel className={classes.label}>
        Chart type
      </InputLabel>
      <Select
        className={classes.select}
        classes={{ root: classes.selectRoot }}
        variant="outlined"
        defaultValue="date"
        onChange={handleChange}
        label="Chart type"
      >
        <MenuItem
          className={classes.item}
          value="date"
        >
          By date
        </MenuItem>
        <MenuItem
          className={classes.item}
          value="amount"
        >
          By amount
        </MenuItem>
      </Select>
    </FormControl>
  );
}

ChartType.propTypes = {
  type: propTypes.string.isRequired,
  setType: propTypes.func.isRequired,
};

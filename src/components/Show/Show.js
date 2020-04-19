import React from 'react';
import propTypes from 'prop-types';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import useStyles from './Show.style';

export default function Show({ isCurrent, setIsCurrent }) {
  const classes = useStyles();

  const handleChange = () => {
    setIsCurrent(!isCurrent);
  };

  return (
    <FormControl variant="outlined">
      <InputLabel className={classes.label}>
        Show
      </InputLabel>
      <Select
        className={classes.select}
        classes={{ root: classes.selectRoot }}
        variant="outlined"
        defaultValue="current"
        onChange={handleChange}
        label="Show "
      >
        <MenuItem
          className={classes.item}
          value="current"
        >
          Current
        </MenuItem>
        <MenuItem
          className={classes.item}
          value="future"
        >
          Future
        </MenuItem>
      </Select>
    </FormControl>
  );
}

Show.propTypes = {
  isCurrent: propTypes.bool.isRequired,
  setIsCurrent: propTypes.func.isRequired,
};

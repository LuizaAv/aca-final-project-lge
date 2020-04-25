import React from 'react';
import propTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import useStyles from './Sort.style';

export default function Sort({ isAscending, setIsAscending }) {
  const classes = useStyles();

  const handleChange = () => {
    setIsAscending(!isAscending);
  };

  return (
    <FormControl variant="outlined">
      <InputLabel className={classes.label} margin="dense">
        <FormattedMessage id="sortByAmount" />
      </InputLabel>
      <Select
        className={classes.select}
        classes={{ root: classes.selectRoot }}
        defaultValue="ascending"
        onChange={handleChange}
        label={<FormattedMessage id="sortByAmount" />}
      >
        <MenuItem
          className={classes.item}
          value="ascending"
        >
          <FormattedMessage id="ascendingOrder" />
        </MenuItem>
        <MenuItem
          className={classes.item}
          value="descending"
        >
          <FormattedMessage id="descendingOrder" />
        </MenuItem>
      </Select>
    </FormControl>
  );
}

Sort.propTypes = {
  isAscending: propTypes.bool.isRequired,
  setIsAscending: propTypes.func.isRequired,
};

import React from 'react';
import propTypes from 'prop-types';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import useStyles from './Sort.style';
import {FormattedMessage} from 'react-intl';

export default function Sort({ isAscending, setIsAscending }) {
  const classes = useStyles();

  const handleChange = () => {
    setIsAscending(!isAscending);
  };

  return (
    <FormControl variant="outlined">
      <InputLabel className={classes.label}>
      <FormattedMessage id="Sortbyamount"  />
      </InputLabel>
      <Select
        className={classes.select}
        classes={{ root: classes.selectRoot }}
        variant="outlined"
        defaultValue="ascending"
        onChange={handleChange}
        label="Sort by amount"
      >
        <MenuItem
          className={classes.item}
          value="ascending"
        >
        <FormattedMessage id="AscendingOrder"  />
        </MenuItem>
        <MenuItem
          className={classes.item}
          value="descending"
        >
          <FormattedMessage id="DescendingOrder"  />
        </MenuItem>
      </Select>
    </FormControl>
  );
}

Sort.propTypes = {
  isAscending: propTypes.bool.isRequired,
  setIsAscending: propTypes.func.isRequired,
};

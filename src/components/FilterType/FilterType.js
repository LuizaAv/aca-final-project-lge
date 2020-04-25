import React from 'react';
import propTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

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

  const select = ['all', 'expense', 'income'];

  return (
    <FormControl variant="outlined">
      <InputLabel className={classes.label}>
        <FormattedMessage id="type" />
      </InputLabel>
      <Select
        className={classes.select}
        classes={{ root: classes.selectRoot }}
        variant="outlined"
        value={filterType}
        onChange={handleChange}
        label={<FormattedMessage id="type" />}
      >
        {select.map((item) => (
          <MenuItem
            className={classes.item}
            key={item}
            value={item}
          >
            <FormattedMessage id={item} />
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

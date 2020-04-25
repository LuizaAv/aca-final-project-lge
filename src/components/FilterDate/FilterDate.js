import React from 'react';
import propTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import useStyles from './FilterDate.style';

export default function FilterDate({ filterDate, setFilterDate }) {
  const classes = useStyles();

  const handleChange = (e) => {
    setFilterDate(e.target.value);
  };

  const select = ['wholePeriod', 'daily', 'monthly', 'yearly'];

  return (
    <div>
      <FormControl variant="outlined">
        <InputLabel className={classes.label}>
          <FormattedMessage id="period" />
        </InputLabel>
        <Select
          className={classes.select}
          classes={{ root: classes.selectRoot }}
          value={filterDate}
          onChange={handleChange}
          label={<FormattedMessage id="period" />}
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
    </div>
  );
}

FilterDate.propTypes = {
  setFilterDate: propTypes.func.isRequired,
  filterDate: propTypes.string.isRequired,
};

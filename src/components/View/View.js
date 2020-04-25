import React from 'react';
import propTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import useStyles from './View.style';

export default function View({ isCurrent, setIsCurrent }) {
  const classes = useStyles();

  const handleChange = () => {
    setIsCurrent(!isCurrent);
  };

  return (
    <FormControl variant="outlined">
      <InputLabel className={classes.label}>
        <FormattedMessage id="view" />
      </InputLabel>
      <Select
        className={classes.select}
        classes={{ root: classes.selectRoot }}
        variant="outlined"
        defaultValue="current"
        onChange={handleChange}
        label={<FormattedMessage id="view" />}
      >
        <MenuItem
          className={classes.item}
          value="current"
        >
          <FormattedMessage id="currentState" />
        </MenuItem>
        <MenuItem
          className={classes.item}
          value="upcoming"
        >
          <FormattedMessage id="upcomingState" />
        </MenuItem>
      </Select>
    </FormControl>
  );
}

View.propTypes = {
  isCurrent: propTypes.bool.isRequired,
  setIsCurrent: propTypes.func.isRequired,
};

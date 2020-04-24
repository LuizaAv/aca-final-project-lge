import React from 'react';
import propTypes from 'prop-types';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import useStyles from './View.style';
import {FormattedMessage} from 'react-intl';

export default function View({ isCurrent, setIsCurrent }) {
  const classes = useStyles();

  const handleChange = () => {
    setIsCurrent(!isCurrent);
  };

  return (
    <FormControl variant="outlined">
      <InputLabel className={classes.label}>
        <FormattedMessage id='Show'/>
      </InputLabel>
      <Select
        className={classes.select}
        classes={{ root: classes.selectRoot }}
        variant="outlined"
        defaultValue="current"
        onChange={handleChange}
        label="View"
      >
        <MenuItem
          className={classes.item}
          value="current"
        >
        <FormattedMessage id='Current'/>
        </MenuItem>
        <MenuItem
          className={classes.item}
          value="upcoming"
        >
        <FormattedMessage id='Future'/>
        </MenuItem>
      </Select>
    </FormControl>
  );
}

View.propTypes = {
  isCurrent: propTypes.bool.isRequired,
  setIsCurrent: propTypes.func.isRequired,
};

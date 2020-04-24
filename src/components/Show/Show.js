import React from 'react';
import propTypes from 'prop-types';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import useStyles from './Show.style';
import {FormattedMessage} from 'react-intl';

export default function Show({ isCurrent, setIsCurrent }) {
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
        label="Show "
      >
        <MenuItem
          className={classes.item}
          value="current"
        >
        <FormattedMessage id='Current'/>
        </MenuItem>
        <MenuItem
          className={classes.item}
          value="future"
        >
        <FormattedMessage id='Future'/>
        </MenuItem>
      </Select>
    </FormControl>
  );
}

Show.propTypes = {
  isCurrent: propTypes.bool.isRequired,
  setIsCurrent: propTypes.func.isRequired,
};

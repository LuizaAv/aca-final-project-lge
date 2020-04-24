import React from 'react';
import propTypes from 'prop-types';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import useStyles from './ChartType.style';
import {FormattedMessage} from 'react-intl';

export default function Type({ type, setType }) {
  const classes = useStyles();

  const handleChange = (e) => {
    setType(e.target.value);
  };

  return (
    <FormControl variant="outlined">
      <InputLabel className={classes.label}>
        <FormattedMessage id='Type'/>
      </InputLabel>
      <Select
        className={classes.select}
        classes={{ root: classes.selectRoot }}
        variant="outlined"
        defaultValue="date"
        onChange={handleChange}
        label=" type"
      >
        <MenuItem
          className={classes.item}
          value="date"
        >
          <FormattedMessage id='ByDate'/>
        </MenuItem>
        <MenuItem
          className={classes.item}
          value="amount"
        >
          <FormattedMessage id='ByAmount'/>
        </MenuItem>
      </Select>
    </FormControl>
  );
}

Type.propTypes = {
  type: propTypes.string.isRequired,
  setType: propTypes.func.isRequired,
};

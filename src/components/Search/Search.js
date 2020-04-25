import React from 'react';
import propTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import TextField from '@material-ui/core/TextField';
import useStyles from './Search.style';

export default function Search({ searchValue, setSearchValue }) {
  const classes = useStyles();

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <FormattedMessage id="search">
      {(name) => (
        <TextField
          className={classes.search}
          InputLabelProps={{ shrink: true }}
          label={<FormattedMessage id="search" />}
          placeholder={name}
          size="small"
          variant="outlined"
          value={searchValue}
          onChange={handleChange}
        />
      )}
    </FormattedMessage>
  );
}

Search.propTypes = {
  setSearchValue: propTypes.func.isRequired,
  searchValue: propTypes.string.isRequired,
};

import React from 'react';
import propTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import useStyles from './Search.style';

export default function Search({ searchValue, setSearchValue }) {
  const classes = useStyles();
  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <TextField
      className={classes.search}
      size="small"
      label="Search"
      variant="outlined"
      value={searchValue}
      onChange={handleChange}
    />
  );
}

Search.propTypes = {
  setSearchValue: propTypes.func.isRequired,
  searchValue: propTypes.string.isRequired,
};

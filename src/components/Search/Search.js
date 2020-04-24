import React from 'react';
import propTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import useStyles from './Search.style';
import {FormattedMessage} from 'react-intl';

export default function Search({ searchValue, setSearchValue }) {
  const classes = useStyles();
  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <FormattedMessage id='SearchHistory'>
      {name=>
      <TextField 
      placeholder={name}
      className={classes.search}
      InputLabelProps={{ shrink: true }}
      label={<FormattedMessage id='Search'  />}
      
      size="small"
      variant="outlined"
      value={searchValue}
      onChange={handleChange}
      />
      }
    </FormattedMessage>
//     <TextField
//       className={classes.search}
//       InputLabelProps={{ shrink: true }}
//       label={<FormattedMessage id='Search' />}
//       size="small"
//       variant="outlined"
//       value={searchValue}
//       onChange={handleChange}
//     />
  );
}

Search.propTypes = {
  setSearchValue: propTypes.func.isRequired,
  searchValue: propTypes.string.isRequired,
};

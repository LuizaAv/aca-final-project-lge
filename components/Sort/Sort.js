import React from 'react';
import propTypes from 'prop-types';
import Button from '@material-ui/core/Button';

export default function Sort({ isAscending, setIsAscending }) {
  const handleClick = () => {
    setIsAscending(!isAscending);
  };

  return (
    <Button onClick={handleClick} variant="outlined">
      SORT
    </Button>
  );
}

Sort.propTypes = {
  isAscending: propTypes.bool.isRequired,
  setIsAscending: propTypes.func.isRequired,
};

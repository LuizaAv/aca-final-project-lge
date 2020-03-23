import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';

import { useStoreContext } from '../../store/storeContext';
import { sortBudget } from '../../store/actions';

export default function Sort() {
  const { dispatch } = useStoreContext();
  const [ascending, setAscending] = useState(true);

  useEffect(() => {
    dispatch(sortBudget(ascending));
  }, [ascending]);

  const handleClick = () => {
    setAscending(!ascending);
  };

  return (
    <Button onClick={handleClick} variant="outlined">
      SORT
    </Button>
  );
}

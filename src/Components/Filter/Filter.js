import React, { useState } from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles } from '@material-ui/core/styles';

import { useStoreContext } from '../../store/storeContext';

const useStyles = makeStyles({
  select: {
    width: 150,
    height: 35,
    marginLeft: 5,
    textAlign: 'center',
  },
  menuItem: {
    justifyContent: 'center',
  },
});

export default function Filter({ filterItems, setfilterItems }) {
  const classes = useStyles();
  const { state } = useStoreContext();
  const [type, setType] = useState('all');
  const isBudget = filterItems[0].amount !== undefined;

  React.useEffect(() => {
    if (isBudget) {
      const filter = type === 'all'
        ? [...state.budget]
        : state.budget.filter((budgetItem) => budgetItem.type === type);
      setfilterItems(filter);
    } else {
      const filter = type === 'all'
        ? [...state.categories]
        : state.categories.filter((category) => category.type === type);
      setfilterItems(filter);
    }
  }, [type, state, isBudget, setfilterItems]);

  const handleChange = (e) => {
    setType(e.target.value);
  };

  return (
    <>
      <FormControlLabel
        control={(
          <Select
            className={classes.select}
            variant="outlined"
            value={type}
            onChange={handleChange}
          >
            <MenuItem className={classes.menuItem} value="all">All</MenuItem>
            <MenuItem className={classes.menuItem} value="expense">Expense</MenuItem>
            <MenuItem className={classes.menuItem} value="income">Income</MenuItem>
          </Select>
        )}
        label="Filter"
        labelPlacement="start"
      />
    </>
  );
}

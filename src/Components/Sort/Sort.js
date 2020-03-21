/* eslint-disable no-unused-expressions */
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useStoreContext } from '../../store/storeContext';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      padding: 3,

    },
  },
}));


export default function Sort() {
  const { state } = useStoreContext();
  const [open, setOpen] = useState(true);
  const classes = useStyles();

  const handleSort = () => {
    open
      ? state.budget.sort((a, b) => b.amount - a.amount)
      : state.budget.sort((a, b) => a.amount - b.amount);
    setOpen(!open);
  };
  return (
    <div className={classes.root}>
      <Button
        onClick={handleSort}
        variant="contained"
      >
        SORT

      </Button>
      {state.budget.map((el) => (<div>{el.amount}</div>))}
    </div>

  );
}

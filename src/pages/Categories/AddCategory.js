import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

import { useStoreContext } from '../../store/storeContext';
import { addCategory } from '../../store/actions';

const useStyles = makeStyles({
  title: {
    margin: 'auto',
  },
  itemSize: {
    width: '80%',
    margin: 'auto',
    marginBottom: 15,
  },
  flexContainer: {
    display: 'flex',
  },
  button: {
    textDecoration: 'none',
    border: '3px solid #ffffff',
  },
});

export default function AddCategory() {
  const classes = useStyles();
  const { dispatch } = useStoreContext();
  const [type, setType] = useState('');
  const [name, setName] = useState('');
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleTypeChange = (e) => {
    setType(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleStateReset = () => {
    setType('');
    setName('');
    setOpen(!open);
  };

  const handleAddCategory = () => {
    const id = uuidv4();
    const addedCategory = { id, type, name };
    handleStateReset();
    dispatch(addCategory(addedCategory));
  };

  const doneDisabled = !(name !== '' && type !== '');

  return (
    <>
      <div className={classes.flexContainer}>
        <Button
          variant="outlined"
          onClick={handleOpen}
          className={classes.button}
        >
          Add Category
        </Button>

        <Dialog fullWidth maxWidth="xs" onClose={handleOpen} open={open}>
          <DialogTitle className={classes.title}>Add Category</DialogTitle>

          <FormControl className={classes.itemSize}>
            <InputLabel>Category type</InputLabel>
            <Select value={type} onChange={handleTypeChange}>
              <MenuItem value="expense">Expense</MenuItem>
              <MenuItem value="income">Income</MenuItem>
            </Select>
          </FormControl>

          <TextField
            className={classes.itemSize}
            label="Category name"
            value={name}
            onChange={handleNameChange}
          />

          <DialogActions>
            <Button
              disabled={doneDisabled}
              variant="outlined"
              onClick={handleAddCategory}
            >
              Done
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
}

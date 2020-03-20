import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

import { useStoreContext } from '../../store/storeContext';
import { addCategory } from '../../store/actions';

export default function AddCategory() {
  const { state, dispatch } = useStoreContext();

  const [type, setType] = React.useState('');
  const [name, setName] = React.useState('');

  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(!open);
  };

  const handleTypeChange = (e) => {
    setType(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  return (
    <>
      <button type="button">add</button>

      <Dialog
        onClose={handleClose}
        aria-labelledby="simple-dialog-title"
        open={open}
      >
        <DialogTitle id="simple-dialog-title">Add Category</DialogTitle>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value="Category type"
          onChange={handleTypeChange}
        >
          <MenuItem value="expense">Expense</MenuItem>
          <MenuItem value="income">Income</MenuItem>
        </Select>
        <TextField
          id="standard-basic"
          label="Category name"
          value={name}
          onChange={handleNameChange}
        />
      </Dialog>
    </>
  );
}

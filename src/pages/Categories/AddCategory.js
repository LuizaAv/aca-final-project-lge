import React from 'react';
import Button from '@material-ui/core/Button';
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

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleTypeChange = (e) => {
    setType(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAddCategory = () => {
    const id = state.categories.reduce(
      (acc, category) => (category.id > acc ? category.id : acc),
      0,
    ) + 1;
    const newCategory = { id, type, name };
    dispatch(addCategory(newCategory));
  };

  return (
    <>
      <Button variant="contained" onClick={handleOpen}>
        Add Category
      </Button>

      <Dialog
        onClose={handleOpen}
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
        <Button variant="contained" onClick={handleAddCategory}>
          Done
        </Button>
      </Dialog>
    </>
  );
}

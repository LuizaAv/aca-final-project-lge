import React from 'react';
import uuid from 'uuid/v4';
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
});

export default function AddCategory() {
  const classes = useStyles();
  const { dispatch } = useStoreContext();
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

  const handleStateReset = () => {
    setType('');
    setName('');
    setOpen(!open);
  };

  const handleAddCategory = () => {
    const id = uuid();
    const addedCategory = { id, type, name };
    handleStateReset();
    dispatch(addCategory(addedCategory));
  };

  return (
    <>
      <Button variant="outlined" onClick={handleOpen}>
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
          <Button variant="outlined" onClick={handleAddCategory}>
            Done
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

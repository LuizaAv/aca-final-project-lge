import React, { useState } from 'react';
import propTypes from 'prop-types';
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
import { editCategory } from '../../store/actions';

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

export default function EditCategory({ category }) {
  const classes = useStyles();
  const { dispatch } = useStoreContext();
  const [type, setType] = useState(category.type);
  const [name, setName] = useState(category.name);
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
    setOpen(!open);
  };

  const handleAddCategory = () => {
    const { id } = category;
    const editedCategory = { id, type, name };
    handleStateReset();
    dispatch(editCategory(editedCategory));
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleOpen}>
        Edit
      </Button>

      <Dialog fullWidth maxWidth="xs" onClose={handleOpen} open={open}>
        <DialogTitle className={classes.title}>Edit Category</DialogTitle>

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
    </div>
  );
}


EditCategory.propTypes = {
  category: propTypes.shape({
    id: propTypes.string.isRequired,
    type: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
  }),
};

EditCategory.defaultProps = {
  category: {
    id: propTypes.string.isRequired,
    type: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
  },
};

import React from 'react';
import Dialog from '@material-ui/core/Dialog';

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

  return (
    <>
      <button type="button">
        add
      </button>

      <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
        <input type='text' />
      </Dialog>
    </>
  );
}

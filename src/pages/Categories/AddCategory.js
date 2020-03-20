import React from 'react';

import { useStoreContext } from '../../store/storeContext';
import { addCategory } from '../../store/actions';

export default function AddCategory() {
  const { state, dispatch } = useStoreContext();
  const [type, setType] = React.useState('');
  const [name, setName] = React.useState('');


  return (
    <button type="button">
      add
    </button>
  );
}

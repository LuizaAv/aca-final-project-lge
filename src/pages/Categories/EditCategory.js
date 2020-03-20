import React from 'react';

import { useStoreContext } from '../../store/storeContext';
import { editCategory } from '../../store/actions';

export default function EditCategory() {
  const { state, dispatch } = useStoreContext();

  return (
    <button type="button">
      edit
    </button>
  );
}

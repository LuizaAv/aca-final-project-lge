import React from 'react';

import { useStoreContext } from '../../store/storeContext';
import { deleteCategory } from '../../store/actions';

export default function RemoveCategory() {
  const { state, dispatch } = useStoreContext();

  return (
    <button type="button">
      remove
    </button>
  );
}

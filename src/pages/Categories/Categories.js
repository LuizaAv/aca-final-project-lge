import React from 'react';

import AddCategory from './AddCategory';
import { useStoreContext } from '../../store/storeContext';

export default function Categories() {
  const { state } = useStoreContext();

  return (
    <>
      <AddCategory />
      <ul>
        {state.categories.map(category => (
          <li>{category.name}</li>
        ))}
      </ul>
    </>
  );
}

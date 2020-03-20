import React from 'react';

import { useStoreContext } from '../../store/storeContext';

export default function Categories() {
  const { state } = useStoreContext();

  return (
    <>
      <ul>
        {state.categories.map(category => (
          <li>{category.name}</li>
        ))}
      </ul>
    </>
  );
}

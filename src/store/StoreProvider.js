import React, { useReducer } from 'react';
import propTypes from 'prop-types';
import { reducer } from './reducers';
import { StoreContext } from './storeContext';

const initialState = {
  categories: [],
  budget: [],
};

export default function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
}

StoreProvider.propTypes = {
  children: propTypes.node.isRequired,
};

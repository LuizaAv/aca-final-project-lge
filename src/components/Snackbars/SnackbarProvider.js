import React, { useReducer } from 'react';
import propTypes from 'prop-types';
import snackbarReducer from './snackbarReducer';
import { SnackbarContext } from './snackbarContext';

const initialState = { severity: '', message: '', open: false };

export default function SnackbarProvider({ children }) {
  const [snackbarState, snackbarDispatch] = useReducer(snackbarReducer, initialState);
  return (
    <SnackbarContext.Provider value={{ snackbarState, snackbarDispatch }}>
      {children}
    </SnackbarContext.Provider>
  );
}

SnackbarProvider.propTypes = {
  children: propTypes.node.isRequired,
};

import { createContext, useContext } from 'react';

export const SnackbarContext = createContext({});

export function useSnackbarContext() {
  return useContext(SnackbarContext);
}

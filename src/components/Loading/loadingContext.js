import { createContext, useContext } from 'react';

export const LoadingContext = createContext({});

export function useLoadingContext() {
  return useContext(LoadingContext);
}

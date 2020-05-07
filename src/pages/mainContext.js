import { createContext, useContext } from 'react';

export const MainContext = createContext({});

export function useMainContext() {
  return useContext(MainContext);
}

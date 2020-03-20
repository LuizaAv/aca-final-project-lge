import { createContext, useContext } from 'react';

export const StoreContext = createContext({});

export function useStoreContext() {
  return useContext(StoreContext);
}

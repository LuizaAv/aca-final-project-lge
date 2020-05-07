import { createContext, useContext } from 'react';

export const LanguageContext = createContext({});

export function useLanguageContext() {
  return useContext(LanguageContext);
}

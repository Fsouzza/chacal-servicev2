import { createContext } from 'react';
import { snack } from './snack';

type SnackContextProviderProps = {
  children: React.ReactNode
}

export const SnackbarContext = createContext(snack);

export const SnackbarContextProvider = ({children}: SnackContextProviderProps) => {
  return(
    <SnackbarContext.Provider value={snack}>
      {children}
    </SnackbarContext.Provider>
  );
};
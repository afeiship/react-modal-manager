import { createContext, useContext } from 'react';

const ERR_MSG = 'useModal must be used within a Context.Provider';
export const ModalContext = createContext({});

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) throw new Error(ERR_MSG);
  return context;
};

import { createContext, useContext } from 'react';
import Store from './store';

const ERR_MSG = 'useModal must be used within a Context.Provider';
export type ModalContextType = { $modal: Store };
export const ModalContext = createContext({} as ModalContextType);

export const useModal = () => {
  const modal = useContext<ModalContextType>(ModalContext);
  if (!modal) throw new Error(ERR_MSG);
  return modal;
};

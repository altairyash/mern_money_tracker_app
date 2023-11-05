import { createContext, useContext, useState } from 'react';

const GlobalStateContext = createContext();

export const GlobalStateProvider = ({ children }) => {
  const [addTransaction, setAddTransaction] = useState(false);
  const [balance, setBalance] = useState("0.00");

  return (
    <GlobalStateContext.Provider value={{ addTransaction, setAddTransaction, balance, setBalance }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export const useGlobalState = () => {
  return useContext(GlobalStateContext);
};

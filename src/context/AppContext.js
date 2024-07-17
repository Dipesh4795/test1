import { createContext, useState } from "react";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const account = localStorage.getItem("accounttype")
    ? JSON.parse(localStorage.getItem("accounttype"))
    : null;
  const [accounttype, setAccounttype] = useState(account);

  const value = {
    accounttype,
    setAccounttype,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

import React, { createContext, useContext, useState } from "react";

// Create context
const UserModeContext = createContext();

// Custom hook for easy use
export const useUserMode = () => useContext(UserModeContext);

// Provider component
export const UserModeProvider = ({ children }) => {
  const [mode, setMode] = useState("adult"); // default can be set dynamically

  return (
    <UserModeContext.Provider value={{ mode, setMode }}>
      {children}
    </UserModeContext.Provider>
  );
};

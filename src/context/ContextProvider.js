import React, { useState } from 'react';
import AppContext from '.';
const ContextProvider = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false)
  const context = {
    setIsVisible,
    isVisible,
  };
  return (
    <AppContext.Provider value={ context }>
      {children}
    </AppContext.Provider>
  );
}
export default ContextProvider;
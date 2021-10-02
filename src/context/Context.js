import React, { useState, useContext } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const openDropdown = () => {
    setIsDropdownOpen(true);
  };
  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const openMobileNavMenu = () => {
    setIsMobileNavOpen(true);
  };
  const closeMobileNavMenu = () => {
    setIsMobileNavOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        isMobileNavOpen,
        isDropdownOpen,
        openMobileNavMenu,
        closeMobileNavMenu,
        openDropdown,
        closeDropdown,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };

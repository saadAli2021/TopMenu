import { useContext, useState } from "react";
import React from "react";
import sublinks from "./data";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [location, setLocation] = useState({});
  const [page, setPage] = useState({ page: "", links: [] });
  const [isSubmenuOpen, setIsSubMenuOpen] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const positionSubMenu = (center, label) => {
    const pageItem = sublinks.find((link) => link.page === label);
    setLocation({ center });
    setPage(pageItem);
    setIsSubMenuOpen(true);
  };

  const openSidebar = () => {
    setShowSidebar(true);
  };
  const closeSubMenu = () => {
    setIsSubMenuOpen(false);
  };

  const closeSidebar = () => {
    setShowSidebar(false);
  };
  return (
    <AppContext.Provider
      value={{
        positionSubMenu,
        location,
        page,
        isSubmenuOpen,
        closeSubMenu,
        openSidebar,
        showSidebar,
        closeSidebar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const UseGlobalContext = () => {
  return useContext(AppContext);
};
export { AppProvider };

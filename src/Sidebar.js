import React from "react";
import { UseGlobalContext } from "./context";
import { MdClose } from "react-icons/md";
const Sidebar = () => {
  const { showSidebar, closeSidebar } = UseGlobalContext();
  return (
    <aside
      className={`${showSidebar ? "sidebarWrapper show" : "sidebarWrapper"}`}
    >
      <div className="sidebar">
        <button className="closeSidebar" onClick={closeSidebar}>
          <MdClose />
        </button>
        <div className="sidebarContent">
          <h3>Producta</h3>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

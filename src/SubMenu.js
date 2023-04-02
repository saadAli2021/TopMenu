import React, { useEffect, useRef } from "react";
import { UseGlobalContext } from "./context";

const SubMenu = () => {
  const submenuWrapper = useRef(null);
  const { location, page, isSubmenuOpen } = UseGlobalContext();
  useEffect(() => {
    submenuWrapper.current.style.left = `${location.center}px`;
  }, [location]);
  return (
    <div
      className={`${isSubmenuOpen ? "submenuWrapper show" : "submenuWrapper"}`}
      ref={submenuWrapper}
    >
      <h4>{page.page}</h4>
      <div className="linksection">
        {page.links.map((link, index) => {
          const { label, icon, url } = link;

          return (
            <a key={index} href={url}>
              {icon}
              {label}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default SubMenu;

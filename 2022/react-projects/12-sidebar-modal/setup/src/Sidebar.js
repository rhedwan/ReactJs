import React from "react";
import logo from "./logo.svg";
import { FaTimes } from "react-icons/fa";
import { social, links } from "./data";
import { useGlobalContext } from "./context";

const Sidebar = () => {
  const { isSideBarOpen, closeSidebar } = useGlobalContext();

  return (
    <div className={`${isSideBarOpen ? "sidebar show-sidebar" : "sidebar"}`}>
      <div className="sidebar-header">
        <img src={logo} className="logo" alt="coding addict" />
        <div className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </div>
      </div>
      <ul className="links">
        {links.map((link) => {
          const { id, url, icon, text } = link;
          return (
            <li key={id}>
              <a href={url}>
                {icon} {text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="social-icons">
        {social.map((link) => {
          const { id, url, icon, text } = link;
          return (
            <li key={id}>
              <a href={url}>
                {icon} {text}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;

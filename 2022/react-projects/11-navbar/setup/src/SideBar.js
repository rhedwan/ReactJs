import React from "react";
import { links, social } from "./data";
const SideBar = () => {
  return (
    <React.Fragment>
      <div className="links-container show-container">
        <ul className="links">
          {links.map((link) => {
            const { id, url, text } = link;
            return (
              <li key={id}>
                <a href={url}>{text}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </React.Fragment>
  );
};

export default SideBar;

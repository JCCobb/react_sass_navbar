import React from "react";

import "./SideDrawer.scss";

const sideDrawer = props => {
  let drawerClasses = "side-drawer";
  if (props.show) {
    drawerClasses = "side-drawer open";
  }
  return (
    <nav className={drawerClasses}>
      <ul>
        {props.items.map(i => (
          <li key={i.name}>
            <a href={i.href}>{i.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default sideDrawer;

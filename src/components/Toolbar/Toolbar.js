import React from "react";

import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import "./Toolbar.scss";

const toolbar = props => (
  <>
    <header className="toolbar">
      <nav className="toolbar__navigation">
        <div className="toolbar__toggle-button">
          <DrawerToggleButton click={props.drawerClickHandler} />
        </div>
        <div className="toolbar__logo">
          <a href="/">THE LOGO</a>
        </div>
        <div className="toolbar__spacer" />
        <div className="toolbar_navigation-items">
          <ul>
            {props.items.map(i => (
              <li key={i.name}>
                <a href={i.href}>{i.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
    <div className="toolbar__margin" />
  </>
);

export default toolbar;

import React, { Component } from "react";
import Content from "./components/content";
import Toolbar from "./components/Toolbar/Toolbar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop";
import ImageAnimation from "./components/ImagePositioning/ImageAnimation";
import "./styles.scss";

class App extends Component {
  state = {
    sideDrawerOpen: false
  };
  items = [
    { name: "home", label: "Home", href: "/" },
    { name: "billing", label: "Billing", href: "/" },
    { name: "clients", label: "Clients", href: "/" },
    { name: "tests", label: "Testing", href: "/" },
    { name: "other", label: "Other", href: "/" },
    { name: "settings", label: "Settings", href: "/" }
  ];
  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <div className="App">
        <Toolbar
          drawerClickHandler={this.drawerToggleClickHandler}
          items={this.items}
        />
        <SideDrawer show={this.state.sideDrawerOpen} items={this.items} />
        {backdrop}
        <Content />
        <ImageAnimation />
      </div>
    );
  }
}

export default App;

import React from "react";
import Listing from "./components/Listing";
import AddNew from "./components/AddNew";

export default class RecipeBook extends React.Component {
  state = {
    active: "listing",
    asd: 1
  };

  renderContent() {
    if (this.state.active === "listing") {
      return (
        <React.Fragment>
          <Listing />
        </React.Fragment>
      );
    } else if (this.state.active === "add") {
      return (
        <React.Fragment>
          <AddNew setActive={this.setActive} />
        </React.Fragment>
      );
    }
  }

  setActive = (page) => {
    this.setState({
      active: page
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <button
                className="nav-link active"
                aria-current="page"
                onClick={() => {
                  this.setActive("listing");
                }}
              >
                Recipes
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link"
                onClick={() => {
                  this.setActive("add");
                }}
              >
                Add New
              </button>
            </li>
          </ul>
          { this.renderContent() }
        </div>
      </React.Fragment>
    );
  }
}

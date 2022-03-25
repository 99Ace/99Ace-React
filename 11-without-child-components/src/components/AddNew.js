import React from "react";
import axios from "axios";
export default class AddNew extends React.Component {
  url = "https://m9-99ace-api.herokuapp.com/m9User/";

  state = {
    first_name: "",
    last_name: "",
    position: ""
  };

  updateFormField = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  addNew = async () => {
    let response = await axios.post(this.url + "create", {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      position: this.state.position
    });
    this.props.setActive("listing");
  };


  render() {
    return (
      <React.Fragment>
        <h1>Add New Recipe</h1>
        <div>
          <div className="label">First name</div>
          <input
            type="text"
            className="form-control"
            name="first_name"
            value={this.state.first_name}
            onChange={this.updateFormField}
          />
          <div className="label">Last name</div>
          <input
            type="text"
            className="form-control"
            name="last_name"
            value={this.state.last_name}
            onChange={this.updateFormField}
          />
        </div>
        <div>
          <div className="label">Position</div>
          <input
            type="text"
            className="form-control"
            name="position"
            value={this.state.position}
            onChange={this.updateFormField}
          />
        </div>

        <button className="btn btn-primary mt-3" onClick={this.addNew}>
          Add New
        </button>
      </React.Fragment>
    );
  }
}
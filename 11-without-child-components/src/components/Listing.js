import React from "react";
import axios from "axios";

export default class Listing extends React.Component {
  url = "https://m9-99ace-api.herokuapp.com/m9User/";

  state = {
    data: []
  };

  render() {
    return (
      <React.Fragment>
        <h1>Recipes Listing</h1>
        {
          this.state.data.map(eachData =>
            <React.Fragment>
              <div className="card" key={ eachData._id }>
                <div className="card-body">
                  <h3 className="card-title">
                    { eachData.first_name } { eachData.last_name }
                  </h3>
                  <h4>Position</h4>
                  <div>
                    { eachData.position }
                  </div>
                </div>
              </div>
            </React.Fragment>)
        }
      </React.Fragment>
    );
  }

  async componentDidMount() {
    let response = await axios.get(this.url + "read");
    console.log(response.data)
    this.setState({
      data: response.data
    });
  }
}
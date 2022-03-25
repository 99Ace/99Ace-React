import React from "react";
import "./style.css";

export default class App extends React.Component {
  state = {
    users: [
      {
        _id: Math.floor(Math.random() * 10000),
        name: "Jon Snow",
        email: "jonsnow@winterfell.com"
      },
      {
        _id: Math.floor(Math.random() * 10000),
        name: "Ned Stark",
        email: "nedstark@winterfell.com"
      },
      {
        _id: Math.floor(Math.random() * 10000),
        name: "Frodo Baggins",
        email: "frodo@bagend.com"
      }
    ],
    // for new entry
    newUserName: "",
    newUserEmail: "",
    // for edit user
    userBeingModified: 0,
    editUserName: "",
    editUserEmail: ""
  };

  updateFormField = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  renderAddUser() {
    return (
      <React.Fragment>
        <input
          type="text"
          placeholder="User name"
          value={this.state.newUserName}
          onChange={this.updateFormField}
          name="newUserName"
        />
        <input
          type="text"
          placeholder="User email"
          value={this.state.newUserEmail}
          onChange={this.updateFormField}
          name="newUserEmail"
        />
        <button onClick={this.addUser}>Add</button>
      </React.Fragment>
    );
  }
  renderUser = (user) => {
    return (
      <React.Fragment key={user._id}>
        <div class="box">
          <h3>{user.name}</h3>
          <h4>{user.email}</h4>
          <button
            onClick={() => {
              this.beginEdit(user);
            }}
          >
            Update
          </button>
          <button
            onClick={() => {
              this.deleteUser(user);
            }}
          >
            Delete
          </button>
        </div>
      </React.Fragment>
    )
  }
  renderEditUser = (user) => {
    return (
      <React.Fragment key={user._id}>
        <div class="box">
          <input
            type="text"
            placeholder="User name"
            value={this.state.editUserName}
            onChange={this.updateFormField}
            name="editUserName"
          />
        </div>
        <div class="box">
          <input
            type="text"
            placeholder="Email"
            value={this.state.editUserEmail}
            onChange={this.updateFormField}
            name="editUserEmail"
          />
        </div>
        <button
          onClick={() => {
            this.updateUser();
          }}
        >
          Update
        </button>
      </React.Fragment >
    );
  }
  render() {
    return (
      <div className="App">
        {this.state.users.map((user) => {
          return (
            this.state.userBeingModified !== user._id ?
              this.renderUser(user) :
              this.renderEditUser(user)
          )
        })}

        {this.renderAddUser()}
      </div>
    );
  }

  addUser = () => {
    let newData = {
      _id: Math.floor(Math.random() * 10000),
      name: this.state.newUserName,
      email: this.state.newUserEmail
    };

    let newList = [
      ...this.state.users,
      newData
    ];

    this.setState({
      users: newList,
      newUserName: "",
      newUserEmail: ""
    });
  };

  beginEdit = (user) => {
    this.setState({
      userBeingModified: user._id,
      editUserName: user.name,
      editUserEmail: user.email
    })
  };
  updateUser = () => {
    let currentUser = this.state.users.filter( user=> user._id === this.state.userBeingModified)[0]
    let clone = {...currentUser}
    clone.name = this.state.editUserName;
    clone.email= this.state.editUserEmail;

    let modifiedList = this.state.users.map(
      user=> {
        if (user._id !== this.state.userBeingModified){
          return user
        } else {
          return clone
        } 
      }
    )
    console.log(modifiedList)

    this.setState({
      users: modifiedList,
      userBeingModified : 0
    })
  }

  deleteUser = (user) => {
    let index = this.state.users.findIndex(item => item._id === user._id)

    let modifiedList = [
      ...this.state.users.slice(0, index),
      ...this.state.users.slice(index + 1)
    ]

    this.setState({
      users: modifiedList
    })
  };
}

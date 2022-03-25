import React from 'react'
import Create from './components/Create'
import Read from './components/Read'
import axios from "axios"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.js"

export default class App extends React.Component {

  state={
    // database
    data: [],

    // for creation entry
    first_name:"",
    last_name:"",
    position:"",

    // tracker
    submitTracker: false,
    pageTracker : "read"
  }
  async fetchData() {
    let response = await axios.get(" https://m9-99ace-api.herokuapp.com/m9User/read")
    console.log (response.data)
    this.setState({
      data : response.data
    })
  }
  componentDidMount () {
    this.fetchData()
  }
  updateFormField=(e)=>{
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  submitForm=()=>{
    this.setState({
      submitTracker: true
    })
  }
  changePage=(page)=>{
    this.setState({
      pageTracker: page
    })
  }
  
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" dataBsToggle="collapse" data-bs-target="#navbarSupportedContent" ariaControls="navbarSupportedContent" ariaExpanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" ariaCurrent="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" dataBsToggle="dropdown" ariaExpanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu" ariaLabelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
        
        {/* Going to Read  */}
        { 
          this.state.pageTracker==="read" ? 
          <Read
            data = {this.state.data}
            changePage={this.changePage}
          /> : null
        }
        { 
          this.state.pageTracker==="create" ? 
          <Create
            first_name = {this.state.first_name}
            updateFormField= {this.state.updateFormField}
            submitForm = {this.submitForm}
          /> : null
        }
        
        

      </React.Fragment>
    )

  }



}
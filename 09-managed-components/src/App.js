import React from 'react'
import Confirmation from './Confirmation';
import Form from './Form';

export default class App extends React.Component {
  state = {
    username  : "",
    email     : "",
    submitted : false
  }
  updateFormField = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  confirmUpdate = (event) => {
    this.setState({
      submitted:true
    })
  };

  render() {
    return (
      <div style={{ 
        padding: '20px',
       }}>
          
        <div style={{ 
          padding: '20px',
          backgroundColor: 'lightgrey'
        }}>
          <h1>NoFaceBook</h1>
        </div>
        <div>
          {
            this.state.submitted === false ?
            (
              <Form
                username={ this.state.username }
                email = { this.state.email}
                updateFormField={this.updateFormField}
                confirm = { this.confirmUpdate }
              />
            ): (
              <Confirmation
                username={ this.state.username }
                email = { this.state.email}  
              />
            )

          }
          
        </div>

      </div>
    )
  }

}


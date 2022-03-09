import React from 'react'
import './static/style.css'
import amongUs from './amongUs.jpeg'
// 4. Import Alert.js
import Alert from './Alert.js'

// 1. Create a normal function 
function sayHello() {
  return "Among U and Me"
}

// 2. Create a React Component
function DisplayHeader() {
  return(
    <h2>About Us</h2>
  )
}

// 3. Create a React Component with properties (props)
function DisplayHeaderWithProps(props) {
  return (
    <p>
      This is a component function and able to display props value by entering props.name inside the function. <br/>
      The props.name value is <b>{props.name}</b>
    </p>
  )
}

// H1. Hands on 1 Customized image
function BorderedImageFrame(props) {
  return (
    <img src={ props.image } style={ props.style } />
  )
}

function App() {
  return (
    <React.Fragment>
      <h1>Hello World</h1>
      
      {/* 1.1 Call the function in between { } */}
      <p> { sayHello() } </p>

      {/* 2.2 Call the DisplayHeader Component by using the following format */}
      <DisplayHeader/>

      {/* 3.2 Call the DisplayHeaderWithProps with props */}
      <DisplayHeaderWithProps name="Ace" />

      {/* H1.1 Pass image link through props */}
      <BorderedImageFrame 
        // Pass the first prop
        image={ amongUs }
        // Pass a second prop
        style={ 
          {
            width:'200px',
            border: '10px solid beige'
          }
        }
      />

      {/* 4.2 Call the Alert app */}
      <Alert message="This message is passed over to Alert.js and rendered"/>

    </React.Fragment>
  );
}

export default App;

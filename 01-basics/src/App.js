// 1. SETUP TO IMPORT IN REACT
import React from 'react'

// 4. IMPORT IMAGE IN FIRST
import amongUs from './amongUs.jpeg'

// 5. IMPORT EXTERNAL CSS FILE
import "./style.css"


// 2. CREATE A FUNCTION CALL APP
function App() {

  // 3. RETURN TO THE SCREEN
  return (
    <React.Fragment>
      <h1>Hell React World</h1>
      <p>Congrats for creating first React App</p>

      
      {/* 4.1 METHOD I : LOAD IMAGE IN DIRECT TO LINK */}
      <img src={ require('./logo.svg').default } alt="Logo description"/>

      {/* 4.2 METHOD II : LOAD IMAGE AFTER IMPORTING IN FROM ABOVE */}
      <img src={ amongUs } alt="Among Us image"/>

      {/* 5. Inline CSS */}
      {/* first bracket to load in js */}
      {/* second bracket to load in css */}
      <p style={ {backgroundColor:'yellow' } }>Load in In-line CSS</p>

    </React.Fragment>
  );
}

export default App
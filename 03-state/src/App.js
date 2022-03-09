import React from 'react'
import NumberBox from './NumberBox';
import './style.css'

function App() {
  return (
    <React.Fragment>
      <NumberBox initialValue={15}/>
    </React.Fragment>
  );
}

export default App;

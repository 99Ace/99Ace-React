import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import PlayerList from './PlayerList';

function App() {
  return (
    <React.Fragment>
      <div style={{padding:'30px'}}>
        <h1>CMDATA</h1>
        <PlayerList/>
      </div>
    </React.Fragment>
  );
}

export default App;


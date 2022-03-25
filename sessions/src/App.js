import React from 'react';
import { ReactSession } from 'react-client-session';
import ShowUser from './ShowUser';

function App() {
  ReactSession.setStoreType("localStorage");
  ReactSession.set("username", "Bob");

  return (
    <div>
      <h1>Testing Sessions</h1>
      <ShowUser/>
    </div>
  );
}

export default App;
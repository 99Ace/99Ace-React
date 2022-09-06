import React from 'react';
import './App.css';
import ModalExampleSplitMain from './components/ModalExampleSplitMain';

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="content">
            <h1>99Ace Component Testing</h1>
          </div>
          <ModalExampleSplitMain/>
        </header>
      </div>
    );
  }

}

export default App;

import React from 'react'
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import RecipeBook from './RecipeBook';

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <div className='btn btn-primary'>Click me</div>
      <RecipeBook/>
      
    </div>
  );
}

export default App;

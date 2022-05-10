import './App.css';
// import react router stuff
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Individual from './pages/Individual';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Register from './pages/Register';
import PostPage from './pages/PostPage';

function App() {
  return (
    <div className="App">
      {/* main router tag */}
      <Router>
        <nav>
          <ul>
            <li><Link to="/"> Home </Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
            <li><Link to ="/posts">Posts</Link></li>
          </ul>
        </nav>
        {/* nested Routes */}
        <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path="/login" element={<Login/>} />
          <Route path='/register' element={<Register/>} />
          <Route path="/posts" element={<PostPage/>} />
        </Routes>

      </Router>




     
    </div>
  );
}

export default App;

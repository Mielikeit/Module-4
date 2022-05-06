import logo from './logo.svg';
import './App.css';
import {Routes, Route, Link} from 'react-router-dom'

import Game from './Pages/Game';
import Home from './Pages/Home';
import Login from './Pages/Auth/Login';
import Navbar from './Components/Navbar';


function App() {
  return (
    <div className="App">
    <Navbar />
      <Routes>
        <Route path='/' element={<Home />}  />
        <Route path='/game' element={<Game />}  />
        <Route path="/auth/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;

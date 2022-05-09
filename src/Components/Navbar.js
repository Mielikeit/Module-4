import React from 'react'
import Game from '../Pages/Game';
import Home from '../Pages/Home';
import Login from '../Pages/Auth/Login';
import {Routes, Route, Link} from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <nav classname='nav'>
        <Link to='/'>Home</Link>
        <Link to='/game'>Game</Link> 
        <Link to='/login'>Login</Link>

      </nav>
    </div>

    
    
  )
}

export default Navbar
import React from 'react';
import logo from '../trivia.png';
import { Link } from 'react-router-dom';


export default function Home() {
  return (
    <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <Link to="/home">Start Game</Link>
    </header>
  </div>
  )
}
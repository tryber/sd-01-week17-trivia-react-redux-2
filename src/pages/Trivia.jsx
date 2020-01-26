import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/trivia.png';

export default function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Link to="/">Start Game</Link>
      </header>
    </div>
  );
}

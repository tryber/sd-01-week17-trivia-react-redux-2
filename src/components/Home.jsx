import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="App">
      <h1>OI</h1>
      <Link to={"/settings"}>Settings</Link>
      <Link to="/game">
        <button type="button">Play</button>
      </Link>
    </div>
  )
}
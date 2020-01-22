import React from 'react';
import Store from '../Store/Store';

export default function Game() {
  console.log(Store.getState())
  return (
    <div className="App">
      <h1>Game</h1>
    </div>
  );
}

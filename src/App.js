import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import logo from './img/trivia.png';
import Trivia from './components/Trivia';
import Home from './components/Home';
import Settings from './components/Settings';
import Game from './components/Game';

import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Trivia} />
        <Route path="/home" component={Home} />
        <Route path="/settings" component={Settings} />
        <Route path="/game" component={Game} />
      </Switch>
    </BrowserRouter>
  );
}

import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Trivia from './components/Trivia';
import Home from './components/Home';
import Settings from './components/Settings';
import Game from './components/Game';
import Feedback from './components/Feedback';
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Trivia} />
        <Route path="/home" component={Home} />
        <Route path="/settings" component={Settings} />
        <Route path="/game" component={Game} />
        <Route path="/feedback" component={Feedback} />
      </Switch>
    </BrowserRouter>
  );
}

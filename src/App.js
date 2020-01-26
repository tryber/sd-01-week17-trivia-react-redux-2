import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Trivia from './pages/Trivia';
import Home from './pages/Home';
import Settings from './pages/Settings';
import Game from './pages/Game';
import Feedback from './pages/Feedback';
import Ranking from './pages/Ranking';
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Trivia} />
        <Route path="/settings" component={Settings} />
        <Route path="/game" component={Game} />
        <Route path="/feedback" component={Feedback} />
        <Route path="/ranking" component={Ranking} />
      </Switch>
    </BrowserRouter>
  );
}

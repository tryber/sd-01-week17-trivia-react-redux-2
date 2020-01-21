import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import Trivia from './components/Trivia';
import Home from './components/Home';
import Settings from './components/Settings';
import Game from './components/Game';
import Store from './Store/Store';

import './App.css';

export default function App() {
  return (
    <Provider store={Store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Trivia} />
          <Route path="/home" component={Home} />
          <Route path="/settings" component={Settings} />
          <Route path="/game" component={Game} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

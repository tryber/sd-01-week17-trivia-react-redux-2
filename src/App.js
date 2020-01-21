import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Trivia from './components/Trivia'
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Trivia} />
        <Route path="/home" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

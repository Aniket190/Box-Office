import React from 'react';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route exact path="/">This is Home Page</Route>
      <Route exact path="/stared">This is starred</Route>
      <Route>404!</Route>
    </Switch>
  );
}

export default App;

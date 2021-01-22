import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home'
import Movie from './components/Movie'



function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" >
          <Home />
        </Route>
        <Route path="/movie" >
          <Movie />
        </Route>
      </Switch>
      
    </div>
  );
}

export default App;
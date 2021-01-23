import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home'
import Movie from './components/Movie'
import Nav from './components/Nav'



function App() {
  return (
    <div className="container">
      <nav>
        <Nav />
      </nav>  
      <Switch>
        <Route exact path="/movie_search_app" component={Home} />
        <Route path="/movie/:title" component={Movie} />
      </Switch>
      
    </div>
  );
}

export default App;
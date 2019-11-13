import React from 'react';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Info from './Info';

function App(){
  return (
    <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/info' component={Info} />
        </Switch>
    </div>
  );
}

export default App;
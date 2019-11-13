import React from 'react';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Info from './Info';


function App(){
  return (
    <div className='container'>
        <Header/>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/info' component={Info} />
          {/* <Route path='/info' render={}/> */}
          
        </Switch>
    </div>
  );
}

export default App;
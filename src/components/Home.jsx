import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

function Home (){
 return (
    <div>
    <h1>Hello</h1>
    <Link to='/info'><img src='https://images-na.ssl-images-amazon.com/images/I/61m9VoGmt1L._SY606_.jpg'></img></Link>
    </div>
 );
}
export default Home;
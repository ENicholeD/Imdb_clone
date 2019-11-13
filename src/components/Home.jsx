import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Trailers from './Trailers';

function Home (){
 return (
    <div className='row'>
    
        <div className='col-md-8'>
            <Trailers />
            <h1>Movies</h1>
            <Link to='/info/godzilla'><img src='https://images-na.ssl-images-amazon.com/images/I/61m9VoGmt1L._SY606_.jpg' width="300"></img></Link>
            <h4>Godzilla: King of the Monsters</h4>
        </div>
    </div>
 );
}
export default Home;

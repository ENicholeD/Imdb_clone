import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {withRouter} from 'react-router-dom';
//import array of movie objects

function Info(props){
props.selectedMovie

    return (
      <div>
        <h1>info works</h1>
        <img src="https://66.media.tumblr.com/e23dfee35246a4b95a60b6115dcc8770/tumblr_pslvywyYhQ1r9e1ot_1280.jpg" width="600px"></img>
        <p>Godzilla is amazing. Go watch Godzilla.</p>
        <p>5 of 5 carrots <img src="https://image.flaticon.com/icons/png/128/2203/2203354.png" width="30px"></img></p>
      </div>
    );
  }
  
  export default Info;


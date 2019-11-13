import React from 'react';
import logo from '../assets/images/logo.png';


function Header(){
  var logoSize = {
    height: '50',
    margin: '20',
    backgroundColor: 'black'
  }
  var backGroundBlack = {
    backgroundColor: 'black'
  }
    return (
      <div style={backGroundBlack}>
        <img src={logo} style={logoSize}/>
        <input type="text" placeholder="Find Movies, TV Shows, Celebrities and more"></input>
        <hr/>
      </div>
    );
  }
  
  export default Header;
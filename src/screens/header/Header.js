import React, { Component } from 'react';
import './Header.css';
import mascot from './mascot.png';

class Header extends Component {
    render() {
      return (
        <div className='header'>
          <div className='logoImg'>
              <img className='quokka' src={mascot} alt="Quokka"/>
              <h1 className='logo'>Quokka</h1>
          </div>
            <ul className='linkWrapper'>
              <li className='headerLink'>Learn</li>
              <li className='headerLink'>Account</li>
              <li className='headerLink'>Signout</li>
            </ul>
        </div>
      );
    }
  }
  
  export default Header;
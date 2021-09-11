import React, { Component } from 'react';
import { useHistory } from 'react-router';
import { logout } from '../../firebase';
import './Header.css';
import mascot from './mascot.png';

const Learn = () => {
    let history=useHistory();
    const handleClick = () => history.push('/learn');
    
    return (
      <li className='headerLink' onClick={handleClick}>Learn</li>
    );
  };

class Header extends Component {

  render() {

    return (
      <div className='header'>
        <div className='logoImg'>
            <img className='quokka' src={mascot} alt="Quokka"/>
            <h1 className='logo'>Quokka</h1>
        </div>
          <ul className='linkWrapper'>
            <Learn />
            <li className='headerLink'>Account</li>
            <li className='headerLink' onClick={logout}>Signout</li>
          </ul>
      </div>
    );
  }
}
  
export default Header;
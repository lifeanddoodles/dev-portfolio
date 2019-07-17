import React, { Component } from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';

class Navigation extends Component {
  render() {
    return (
      <nav smooth className='navbar-nav ml-auto' aria-label='Main navigation'>
        <NavLink smooth className='nav-item nav-link' to='#top'>
          Home
        </NavLink>
        <NavLink smooth className='nav-item nav-link' to='#portfolio'>
          Portfolio
        </NavLink>
        <NavLink smooth className='nav-item nav-link' to='#skills'>
          Skills
        </NavLink>
        <NavLink smooth className='nav-item nav-link' to='#contact'>
          Contact
        </NavLink>
      </nav>
    );
  }
}

export default Navigation;

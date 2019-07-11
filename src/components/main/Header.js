import React, { Component } from 'react';
import Branding from './Branding';
import Navigation from './Navigation';

class Header extends Component {
  render() {
    return (
      <header id='masthead' className='site-header'>
        <Branding />
        <Navigation />
      </header>
    );
  }
}

export default Header;

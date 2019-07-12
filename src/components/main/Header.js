import React, { Component } from 'react';
import Branding from './components/Branding';
import Navigation from './components/Navigation';

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

import React, { Component } from 'react';
import Navigation from './components/Navigation';

class Header extends Component {
  render() {
    return (
      <header className='site-header bg-light fixed-top'>
        <div className='container-fluid'>
          <Navigation />
        </div>
      </header>
    );
  }
}

export default Header;

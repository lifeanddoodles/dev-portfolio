import React, { Component } from 'react';
import Branding from './components/Branding';
import Navigation from './components/Navigation';

class Header extends Component {
  render() {
    return (
      <header className='site-nav navbar navbar-expand bg-light navbar-light'>
        <div className='container-fluid'>
          <Branding />
          <Navigation />
        </div>
      </header>
    );
  }
}

export default Header;

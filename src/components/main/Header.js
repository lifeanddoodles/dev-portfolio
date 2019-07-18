import React, { Component } from 'react';
import Branding from './components/Branding';
import Navigation from './components/Navigation';

class Header extends Component {
  render() {
    return (
      <header className='site-nav navbar navbar-expand bg-light navbar-light'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-6'>
              <Branding />
            </div>
            <div className='col-md-6'>
              <Navigation />
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;

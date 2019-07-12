import React, { Component } from 'react';
import Social from '../sections/components/Social';

class Footer extends Component {
  render() {
    return (
      <footer id='colophon' className='site-footer'>
        <div className='social-footer'>
          <Social />
        </div>
        <div className='site-info'>
          Created by Sandra Vargas. You can{' '}
          <a href='https://github.com/lifeanddoodles/dev-portfolio'>
            view the code on GitHub
          </a>
          .
        </div>
      </footer>
    );
  }
}

export default Footer;

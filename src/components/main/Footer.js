import React, { Component } from 'react';
import Social from '../sections/components/Social';

class Footer extends Component {
  render() {
    return (
      <footer id='colophon' className='site-footer bg-light text-center'>
        <div className='container'>
          <div className='social-footer'>
            <Social />
          </div>
          <div className='site-info'>
            <p>
              Created by Sandra Vargas. You can{' '}
              <a href='https://github.com/lifeanddoodles/dev-portfolio'>
                view the code on GitHub
              </a>
              .
            </p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;

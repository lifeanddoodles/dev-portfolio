import React, { Component } from 'react';
import FooterCallToAction from './components/FooterCallToAction';

class Footer extends Component {
  render() {
    return (
      <footer id='colophon' className='site-footer bg-light text-center'>
        <div className='container'>
          <div
            className='social-footer text-center'
            role='group'
            aria-label='Social media profiles'
          >
            <FooterCallToAction />
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

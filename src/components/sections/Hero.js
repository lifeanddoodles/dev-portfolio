import React, { Component } from 'react';
import About from './components/About';
import Social from './components/Social';

class Hero extends Component {
  render() {
    return (
      <section id='hero' className='text-center jumbotron jumbotron-fluid'>
        <div className='container'>
          <About />
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6'>
              <h3>Have a project?</h3>
              <a className='btn btn-accent btn-lg btn-block' href='#contact'>
                Contact me
              </a>
            </div>
            <div className='col-md-6'>
              <h4>Learn more about me:</h4>
              <Social />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Hero;

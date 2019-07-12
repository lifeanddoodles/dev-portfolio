import React, { Component } from 'react';
import About from './components/About';
import Social from './components/Social';

class Hero extends Component {
  render() {
    return (
      <section id='hero'>
        <div className='container'>
          <About />
        </div>
        <div className='container'>
          <Social />
        </div>
      </section>
    );
  }
}

export default Hero;

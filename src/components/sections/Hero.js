import React, { Component } from 'react';
import { Jumbotron, Container } from 'reactstrap';
import About from './components/About';
import Social from './components/Social';

class Hero extends Component {
  render() {
    return (
      <Jumbotron id='top' className='text-center' fluid>
        <Container fluid>
          <About />
        </Container>
        <Container fluid>
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
        </Container>
      </Jumbotron>
    );
  }
}

export default Hero;

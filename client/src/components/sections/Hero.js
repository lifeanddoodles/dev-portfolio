import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import About from './components/About';
import SecondaryActions from './components/SecondaryActions';

function Hero(props) {
  // console.log(props);
  return (
    <Jumbotron id='top' className='text-center' fluid>
      <Container>
        <About />
        <div className='row'>
          <div className='col-md-6'>
            <h3>Have a project?</h3>
            <a className='btn btn-accent btn-lg btn-block' href='#contact'>
              <FontAwesomeIcon icon='envelope' />
              Contact me
            </a>
          </div>
          <div className='col-md-6'>
            <h4>Learn more about me:</h4>
            <SecondaryActions
              secondaryActions={props.callToActions.secondary}
            />
          </div>
        </div>
      </Container>
    </Jumbotron>
  );
}

export default Hero;

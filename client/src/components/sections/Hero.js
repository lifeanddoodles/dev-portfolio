import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import About from './components/About';
import PrimaryAction from './components/PrimaryAction';
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
            <PrimaryAction primaryAction={props.callToActions.primary} />
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

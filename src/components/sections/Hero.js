import React, { Suspense } from 'react';
import { Jumbotron, Container } from 'reactstrap';

const About = React.lazy(() => import('./components/About'));
const PrimaryAction = React.lazy(() => import('./components/PrimaryAction'));
const SecondaryActions = React.lazy(() =>
  import('./components/SecondaryActions')
);

function Hero(props) {
  // console.log(props);
  return (
    <Jumbotron id='top' className='text-center' fluid>
      <Container>
        <Suspense fallback={<div>Loading...</div>}>
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
        </Suspense>
      </Container>
    </Jumbotron>
  );
}

export default Hero;

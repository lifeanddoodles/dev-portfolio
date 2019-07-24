import React, { Fragment } from 'react';
import Expertise from './components/Expertise';

function ExpertiseAreas(props) {
  const expertiseAreas = (
    <Fragment>
      <Expertise />
      <Expertise />
      <Expertise />
    </Fragment>
  );
  return (
    <section id='skills' className='mb-0 py-0'>
      {expertiseAreas}
    </section>
  );
}

export default ExpertiseAreas;

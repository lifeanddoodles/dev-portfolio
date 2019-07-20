import React from 'react';
import Expertise from './components/Expertise';

function ExpertiseAreas(props) {
  const expertiseAreas = <h2>Skills</h2>;
  return (
    <section id='skills' className='mb-0 py-0'>
      {expertiseAreas}
      <Expertise />
      <Expertise />
    </section>
  );
}

export default ExpertiseAreas;

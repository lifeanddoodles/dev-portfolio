import React from 'react';
import Expertise from './components/Expertise';

function ExpertiseAreas(props) {
  const expertiseAreasObject = Object.values(props.expertise);
  const expertiseAreas = expertiseAreasObject.map(expertiseArea => (
    <Expertise
      key={expertiseArea.id}
      name={expertiseArea.name}
      description={expertiseArea.description}
      skills={[expertiseArea.skills]}
    />
  ));
  return (
    <section id='skills' className='mb-0 py-0'>
      {expertiseAreas}
    </section>
  );
}

export default ExpertiseAreas;

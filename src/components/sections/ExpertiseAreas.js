import React, { Suspense } from 'react';

const Expertise = React.lazy(() => import('./components/Expertise'));

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
      <Suspense fallback={<div>Loading...</div>}>{expertiseAreas}</Suspense>
    </section>
  );
}

export default ExpertiseAreas;

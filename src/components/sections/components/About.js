import React from 'react';

function About(props) {
  return (
    <div className='text-center' itemScope itemType='https://schema.org/Person'>
      <h1 itemProp='name'>Sandra Vargas</h1>
      <h2
        id='occupation'
        itemProp='hasOccupation'
        itemScope
        itemType='http://schema.org/Occupation'
      >
        <span itemProp='name'>Front-end Developer</span>
        <meta itemProp='skills' content='HTML5, CSS3, Sass, JavaScript' />
      </h2>
      <p className='lead'>
        Team player with good communication skills. Currently learning about
        accesibility and the MERN stack.
      </p>
    </div>
  );
}

export default About;

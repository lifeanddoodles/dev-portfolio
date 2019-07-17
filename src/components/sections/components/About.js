import React from 'react';

function About(props) {
  return (
    <div
      className='text-center mt-12'
      itemScope
      itemType='https://schema.org/Person'
    >
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
        Looking for new opportunnities. I'm always willing to learn new things
        and challenge myself.
      </p>
      <p>
        Currently learning about accesibility and the MERN stack (I like to
        dabble in back-end work as well).
      </p>
    </div>
  );
}

export default About;

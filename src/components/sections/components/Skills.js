import React from 'react';
import Skill from './Skill';

function Skills(props) {
  const skills = <h2>Skill</h2>;
  return (
    <ul className='text-center icon-list'>
      {skills}
      <Skill />
    </ul>
  );
}

export default Skills;

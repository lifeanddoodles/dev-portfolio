import React from 'react';
import Skill from './Skill';

function Skills(props) {
  const skills = <li>Skill</li>;
  return (
    <ul className='text-center icon-list'>
      {skills}
      <Skill />
    </ul>
  );
}

export default Skills;

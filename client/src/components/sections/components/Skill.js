import React from 'react';

function Skill(props) {
  return (
    <li>
      {RegExp('.(gif|jpg|jpeg|tiff|png|svg)$').test(props.icon) === true ? (
        <img
          className='icon-img'
          src={props.icon}
          alt={`${props.name}`}
          role='presentation'
        />
      ) : (
        <i className={`fab fa-${props.icon} icon`} role='presentation' />
      )}
      <h4 className='card-title' itemProp='name'>
        {props.name}
      </h4>
    </li>
  );
}

export default Skill;

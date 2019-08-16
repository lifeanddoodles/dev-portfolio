import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Project(props) {
  const codeUnavailable = props.url.codeUrl === '';
  return (
    <Fragment>
      <div
        className='card project'
        itemScope
        itemType={'https://schema.org/' + props.creativeItemType}
      >
        <a
          href={props.url.projectUrl}
          target='_blank'
          rel='noopener noreferrer'
        >
          <img
            className='card-img'
            src={props.image.large}
            alt=''
            itemProp='image'
          />
        </a>
        <div className='card-body'>
          <h3 className='card-title' itemProp='name'>
            {props.name}
          </h3>
          <p className='card-text' itemProp='description'>
            {props.description.short}
          </p>
          <p className='card-text' itemProp='sourceOrganization'>
            {props.client}
          </p>
        </div>

        <div className='btn-group card-body' role='navigation'>
          <a
            href={props.url.projectUrl}
            className='btn btn-primary card-link'
            itemProp='url'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FontAwesomeIcon icon='eye' />
            View Project
          </a>
          <a
            href={props.url.codeUrl}
            className={
              'btn btn-primary card-link' + (codeUnavailable ? ' disabled' : '')
            }
            itemProp='url'
          >
            <FontAwesomeIcon icon={['fab', 'github']} />
            View Code
          </a>
        </div>
      </div>
    </Fragment>
  );
}

export default Project;

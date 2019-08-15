import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
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
        <Link to={props.url.projectUrl} target='_blank'>
          <img
            className='card-img'
            src={props.image.large}
            alt=''
            itemProp='image'
          />
        </Link>
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
          <Link
            to={props.url.projectUrl}
            className='btn btn-primary card-link'
            itemProp='url'
            target='_blank'
          >
            <FontAwesomeIcon icon='eye' />
            View Project
          </Link>
          <Link
            to={props.url.codeUrl}
            className={
              'btn btn-primary card-link' + (codeUnavailable ? ' disabled' : '')
            }
            itemProp='url'
          >
            <FontAwesomeIcon icon={['fab', 'github']} />
            View Code
          </Link>
        </div>
      </div>
    </Fragment>
  );
}

export default Project;

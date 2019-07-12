import React from 'react';

function Project(props) {
  return (
    <div
      className='card project'
      itemScope
      itemType='https://schema.org/CreativeWork'
    >
      <img
        className='card-img-hrefp'
        src='https://via.placeholder.com/320x120'
        alt=''
        itemProp='image'
      />
      <div className='card-body'>
        <h3 className='card-title' itemProp='name'>
          name
        </h3>
        <p className='card-text' itemProp='description'>
          description
        </p>
        <p className='card-text' itemProp='sourceOrganization'>
          client
        </p>
      </div>

      <div className='btn-group card-body' role='navigation'>
        <a
          href='projectUrl.com'
          className='btn btn-primary card-link'
          itemProp='url'
        >
          View Project
        </a>
        <a
          href='codeUrl.com'
          className='btn btn-primary card-link'
          itemProp='url'
        >
          View Code
        </a>
      </div>
    </div>
  );
}

export default Project;

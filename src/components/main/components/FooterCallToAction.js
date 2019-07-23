import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

function FooterCallToAction(props) {
  return (
    <Fragment>
      <Link
        className='icon-link'
        to='https://github.com/lifeanddoodles'
        target='_blank'
      >
        <img
          className='icon-img'
          src='https://via.placeholder.com/32'
          alt=''
          role='presentation'
        />
        &nbsp; Github
      </Link>
      <Link
        className='icon-link'
        to='https://www.linkedin.com/in/sandralvargas/'
        target='_blank'
      >
        <img
          className='icon-img'
          src='https://via.placeholder.com/32'
          alt=''
          role='presentation'
        />
        &nbsp; LinkedIn
      </Link>
      <Link className='icon-link' to='#' target='_blank'>
        <img
          className='icon-img'
          src='https://via.placeholder.com/32'
          alt=''
          role='presentation'
        />
        &nbsp; Resume
      </Link>
    </Fragment>
  );
}

export default FooterCallToAction;

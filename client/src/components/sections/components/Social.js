import React from 'react';
import { Link } from 'react-router-dom';

function Social(props) {
  return (
    <div className='text-center'>
      <div
        className='btn-group btn-group-lg'
        role='group'
        aria-label='Large button group'
      >
        <Link
          className='btn btn-primary'
          to='https://github.com/lifeanddoodles'
          target='_blank'
        >
          Github
        </Link>
        <Link
          className='btn btn-primary'
          to='https://www.linkedin.com/in/sandralvargas/'
          target='_blank'
        >
          LinkedIn
        </Link>
        <Link className='btn btn-primary' to='#' target='_blank'>
          Resume
        </Link>
      </div>
    </div>
  );
}

export default Social;

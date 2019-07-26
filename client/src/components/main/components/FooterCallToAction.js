import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

function FooterCallToAction(props) {
  return (
    <Fragment>
      <Link
        className='icon-link'
        to='https://github.com/lifeanddoodles'
        target='_blank'
        aria-label='Visit GitHub profile'
      >
        <i className={`fab fa-github icon`} title='Github' />
      </Link>
      <Link
        className='icon-link'
        to='https://www.linkedin.com/in/sandralvargas/'
        target='_blank'
        aria-label='Visit LinkedIn profile'
      >
        <i className={`fab fa-linkedin icon`} title='LinkedIn' />
      </Link>
    </Fragment>
  );
}

export default FooterCallToAction;

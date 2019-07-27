import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ThankYou extends Component {
  render() {
    return (
      <div className='container text-center py-5'>
        <h2>Thanks for emailing me!</h2>
        <p>I'll get back to you as soon as we can.</p>
        <Link to={`/`} className='btn btn-primary' onClick={this.displayNone}>
          Return to Home
        </Link>
      </div>
    );
  }
}

export default ThankYou;

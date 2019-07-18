import React from 'react';

function CallToAction(props) {
  return (
    <section id='contact' className='bg-accent fullwidth'>
      <div className='container'>
        <h1 id='contact'>Reach out</h1>
        <form action=''>
          <div className='form-row'>
            <div className='form-group col-md-6'>
              <label htmlFor='name'>Name</label>
              <input
                type='text'
                className='form-control'
                name='name'
                id='name'
                value=''
              />
            </div>
            <div className='form-group col-md-6'>
              <label htmlFor='email'>Email</label>
              <input
                type='text'
                className='form-control'
                name='email'
                id='email'
                value=''
              />
            </div>
          </div>
          <div className='form-group'>
            <label htmlFor='message'>Message</label>
            <textarea
              name='message'
              className='form-control'
              id='message'
              value=''
            />
          </div>
          <button className='btn btn-accent btn-lg' type='submit'>
            Send
          </button>
        </form>
      </div>
    </section>
  );
}

export default CallToAction;

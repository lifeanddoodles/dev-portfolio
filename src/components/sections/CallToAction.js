import React from 'react';

function CallToAction(props) {
  return (
    <section id='contact' className='bg-accent fullwidth'>
      <div className='container'>
        <h1 id='contact'>Reach out</h1>
        <form action=''>
          <div className='row'>
            <div className='form-group col-md-6 row'>
              <label className='col-sm-2 col-form-label' htmlFor='name'>
                Name
              </label>
              <div className='col-sm-10'>
                <input
                  type='text'
                  className='form-control'
                  name='name'
                  id='name'
                  value=''
                />
              </div>
            </div>
            <div className='form-group col-md-6 row'>
              <label className='col-sm-2 col-form-label' htmlFor='email'>
                Email
              </label>
              <div className='col-sm-10'>
                <input
                  type='text'
                  className='form-control'
                  name='email'
                  id='email'
                  value=''
                />
              </div>
            </div>
          </div>
          <div className='form-group row'>
            <label className='col-sm-2 col-form-label' htmlFor='message'>
              Message
            </label>
            <div className='col-sm-10'>
              <textarea
                name='message'
                className='form-control'
                id='message'
                value=''
              />
            </div>
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

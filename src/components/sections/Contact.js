import React, { Component } from 'react';
// import axios from 'axios';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class Contact extends Component {
  render() {
    return (
      <section id='contact' className='bg-accent fullwidth'>
        <div className='container'>
          <h1>Reach out</h1>
          {/* {msg} */}
          <Form id='contact-form' action='send' method='POST'>
            <div className='form-row'>
              <FormGroup className=' col-md-6'>
                <Label htmlFor='name'>Name</Label>
                <Input
                  type='text'
                  className='form-control'
                  name='name'
                  id='name'
                />
              </FormGroup>
              <FormGroup className=' col-md-6'>
                <Label htmlFor='email'>Email</Label>
                <Input
                  type='text'
                  className='form-control'
                  name='email'
                  id='email'
                />
              </FormGroup>
            </div>
            <FormGroup className=''>
              <Label htmlFor='message'>Message</Label>
              <Input
                type='textarea'
                name='message'
                className='form-control'
                id='message'
              />
            </FormGroup>
            <Button color='primary' className='btn btn-lg' type='submit'>
              Send
            </Button>
          </Form>
        </div>
      </section>
    );
  }
}

export default Contact;

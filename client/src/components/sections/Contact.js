import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

function Contact(props) {
  return (
    <section id='contact' className='bg-accent fullwidth'>
      <div className='container'>
        <h1>Reach out</h1>
        <Form action=''>
          <div className='form-row'>
            <FormGroup className=' col-md-6'>
              <Label htmlFor='name'>Name</Label>
              <Input
                type='text'
                className='form-control'
                name='name'
                id='name'
                value=''
              />
            </FormGroup>
            <FormGroup className=' col-md-6'>
              <Label htmlFor='email'>Email</Label>
              <Input
                type='text'
                className='form-control'
                name='email'
                id='email'
                value=''
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
              value=''
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

export default Contact;

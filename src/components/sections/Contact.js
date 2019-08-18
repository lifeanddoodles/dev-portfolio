import React, { Component } from 'react';
import axios from 'axios';
import {
  Alert,
  Button,
  Form,
  FormFeedback,
  FormGroup,
  Label,
  Input
} from 'reactstrap';

const initialState = {
  alert: null,
  name: '',
  email: '',
  message: '',
  validate: {
    emailState: ''
  }
};

class Contact extends Component {
  state = initialState;

  validateEmail = event => {
    const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const { validate } = this.state;
    if (emailRex.test(event.target.value)) {
      validate.emailState = 'has-success';
    } else {
      validate.emailState = 'has-danger';
    }
    this.setState({ validate });
  };

  handleChange = event => {
    const {
      currentTarget: { name, value }
    } = event;

    this.setState(currentState => ({
      ...currentState,
      [name]: value
    }));
  };

  handleAlert = alert => this.setState({ alert });

  renderAlert = () => {
    const { alert } = this.state;

    if (!alert) return null;

    return (
      <Alert color={alert.status} toggle={this.toggleAlert} isOpen>
        {alert.message}
      </Alert>
    );
  };

  toggleAlert = () => this.setState({ alert: null });

  handleSubmit = event => {
    event.preventDefault();
    const { email, message, name } = this.state;

    axios
      .post('/send', { email, message, name })
      .then(() => this.setState(initialState))
      .then(() =>
        this.handleAlert({
          status: 'success',
          message: 'Message sent. Will get back to you soon.'
        })
      )
      .catch(() =>
        this.handleAlert({
          status: 'danger',
          message:
            'Message not sent. Please check all fields are filled and valid.'
        })
      );
  };

  render() {
    const { email, message, name } = this.state;

    return (
      <section id='contact' className='bg-accent fullwidth'>
        <div className='container'>
          <h1>Reach out</h1>
          {this.renderAlert()}
          <Form id='contact-form' onSubmit={this.handleSubmit}>
            <div className='form-row'>
              <FormGroup className=' col-md-6'>
                <Label htmlFor='name'>Name</Label>
                <Input
                  type='text'
                  className='form-control'
                  name='name'
                  id='name'
                  onChange={this.handleChange}
                  value={name}
                  required
                />
              </FormGroup>
              <FormGroup className=' col-md-6'>
                <Label htmlFor='email'>Email</Label>
                <Input
                  type='text'
                  className='form-control'
                  name='email'
                  id='email'
                  valid={this.state.validate.emailState === 'has-success'}
                  invalid={this.state.validate.emailState === 'has-danger'}
                  onChange={event => {
                    this.validateEmail(event);
                    this.handleChange(event);
                  }}
                  value={email}
                  required
                />
                <FormFeedback>Use a valid email.</FormFeedback>
              </FormGroup>
            </div>
            <FormGroup className=''>
              <Label htmlFor='message'>Message</Label>
              <Input
                type='textarea'
                name='message'
                className='form-control'
                id='message'
                onChange={this.handleChange}
                value={message}
                required
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

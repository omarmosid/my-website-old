import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Container from '../../../reusable/layout/container/container'
import Fields from '../../../reusable/form/fields/fields'
import Label from '../../../reusable/form/fields/label/label'
import Input from '../../../reusable/form/fields/input/input'
import Textarea from '../../../reusable/form/fields/textarea/textarea'
import { Button } from '../../../reusable/button'
import { useState } from 'react'

const ENDPOINT = 'https://omarmosid-backend.herokuapp.com'
// const ENDPOINT = 'http://localhost:8080'

const StyledContactFormSection = styled.section`
  width: 100%;
  margin-top: 80px;
  display: flex;
  justify-content: center;
  div.container__header {
    justify-content: center;
    h1 {
      text-align: center;
    }
  }
  div.container__contactform {
    display: flex;
    flex-direction: column;
    align-items: center;
    form {
      box-sizing: border-box;
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      div.field__button {
        button {
          padding: 18px 30px;
          text-transform: uppercase;
        }
      }
    }
  }
`

const ContactFormSection = (props) => {

  const [inputs, setInputs] = useState({
    fullname: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const newInputs = inputs;
    newInputs[e.target.name] = e.target.value;
    setInputs({
      ...newInputs
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    axios.post(`${ENDPOINT}/contact`, {
      ...inputs
    })
    .then(res => console.log(res))
    .catch(err => console.log(err))
  };

  return (
    <StyledContactFormSection>
      <Container className="container__contactform">
        <form method="post" onSubmit={handleSubmit}>
          <Fields>
            <Label>Your Full Name</Label>
            <Input 
              type="text"
              name="fullname"
              value={inputs.fullname}
              onChange={handleChange}
            />
          </Fields>
          <Fields>
            <Label>Your Email Address</Label>
            <Input 
              type="email"
              name="email"
              value={inputs.email}
              onChange={handleChange}
            />
          </Fields>
          <Fields
            fullwidth={true}
          >
            <Label>Subject</Label>
            <Input 
              type="text"
              name="subject"
              value={inputs.subject}
              onChange={handleChange}
            />
          </Fields>
          <Fields
            fullwidth={true}
          >
            <Label>Your Message</Label>
            <Textarea 
              name="message"
              value={inputs.message}
              onChange={handleChange}
            />
          </Fields>
          <Fields
            className="field__button"
            fullwidth={true}
          >
            <Button.Default>
              Submit
            </Button.Default>
          </Fields>
        </form>
      </Container>
    </StyledContactFormSection>
  )
}

ContactFormSection.defaultProps = {

}

export default ContactFormSection
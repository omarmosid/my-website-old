import React from 'react'
import styled from 'styled-components'
import Container from '../../../reusable/layout/container/container'
import Fields from '../../../reusable/form/fields/fields'
import Label from '../../../reusable/form/fields/label/label'
import Input from '../../../reusable/form/fields/input/input'
import Textarea from '../../../reusable/form/fields/textarea/textarea'
import { Button } from '../../../reusable/button'
import Row from '../../../reusable/layout/row/row'

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
  return (
    <StyledContactFormSection>
      <Container className="container__contactform">
        <form action="" method="post">
          <Fields>
            <Label>Your Full Name</Label>
            <Input 
              type="text"
            />
          </Fields>
          <Fields>
            <Label>Your Email Address</Label>
            <Input 
              type="text"
            />
          </Fields>
          <Fields
            fullwidth={true}
          >
            <Label>Subject</Label>
            <Input 
              type="text"
            />
          </Fields>
          <Fields
            fullwidth={true}
          >
            <Label>Your Message</Label>
            <Textarea />
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
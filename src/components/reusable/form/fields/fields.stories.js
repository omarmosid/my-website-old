import React from "react"
import Fields from "./fields"
import Label from "./label/label"
import Input from "./input/input"
import Helper from "./helper/helper"
import { isEmailValid } from "../../../../utils/sanitization/validators"

export default {
  title: "Fields",
}

export const Name = () => {
  return (
    <Fields>
      <Label>Please Enter your Name</Label>
      <Input placeholder="Johnathan Mann" />
    </Fields>
  )
}

export const EmailValid = () => {
  return (
    <Fields>
      <Label>Please Enter Email ID</Label>
      <Input
        type="email"
        status={isEmailValid("omar@omarmo.com") ? 'normal' : 'error'}
        value="omar@omarmo.com"
      />
      {
        !isEmailValid("omar@omarmo.com") && <Helper status="error">Please enter a valid email</Helper>
      }
    </Fields>
  )
}

export const EmailNotValid = () => {
  return (
    <Fields>
      <Label>Please Enter Email ID</Label>
      <Input
        type="email"
        status={isEmailValid("") ? 'normal' : 'error'}
        value="omar@ssssss"
      />
      {
        !isEmailValid("") && <Helper status="error">❌ Please enter a valid email</Helper>
      }
    </Fields>
  )
}

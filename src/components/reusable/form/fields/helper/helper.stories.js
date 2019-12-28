import React from 'react'
import Helper from './helper'

export default {
  title: 'Helper'
};

export const Normal = () => {
  return (
    <Helper>Please Enter a valid email</Helper>
  )
};

export const WithSuccess = () => {
  return (
    <Helper
      status="success"
    >You have entered a valid email</Helper>
  )
};

export const WithError = () => {
  return (
    <Helper
      status="error"
    >Please Enter a valid email</Helper>
  )
};
import React from 'react';
import Input from './input';

import { action } from '@storybook/addon-actions';

export default {
  title: 'Input',
};

export const Normal = () => {
  return (
    <Input 
      onChange={action('text changed')}
    />
  )
}

export const WithPlaceholder = () => {
  return (
    <Input 
      placeholder="John Doe"
    />
  )
}

export const WithSuccess = () => {
  return (
    <Input 
      status="success"
    />
  )
}

export const WithError = () => {
  return (
    <Input 
      status="error"
    />
  )
}
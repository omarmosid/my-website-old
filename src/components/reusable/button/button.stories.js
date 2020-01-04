import React from 'react'
import { Button } from '.'

export default {
  title: 'Button'
}

export const ButtonDefault = () => {
  return (
    <Button.Default>Hello</Button.Default>
  )
}

export const ButtonGhost = () => {
  return (
    <Button.Ghost

    >Hello</Button.Ghost>
  )
}
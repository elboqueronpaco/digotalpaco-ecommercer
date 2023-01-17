import React from 'react'
import { ButtonBaseIcon } from '../../styles/ui/ButtonModule'

export const ButtonSignIn = (props) => {
  return (
    <ButtonBaseIcon onClick={props.onClick}>{props.label}</ButtonBaseIcon>
  )
}

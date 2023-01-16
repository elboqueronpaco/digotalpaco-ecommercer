import React from 'react'
import { LinkModule } from '../../styles/ui/LinkModule'

export const LinkNav = (props) => {
  return (
    <LinkModule to={props.to} onClick={props.onClick} {...props}>{props.label}</LinkModule>
  )
}

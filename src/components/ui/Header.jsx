import React from 'react'
import { HeaderModule } from '../../styles/ui/HeaderModule'

export const Header = (props) => {
  return (
    <HeaderModule>{props.children}</HeaderModule>
  )
}

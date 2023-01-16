import React from 'react'
import { navLink } from '../../data/nav'
import { NavbarModule } from '../../styles/ui/NavbarModule'
import { LinkNav } from './LinkNav'

export const Nav = (props) => {
  return (
    <NavbarModule open={props.open}>
        {
            navLink.map( ({to, label})=> (
                <LinkNav key={to} to={to} label={label} onClick={props.onClick } />
            ))
        }
        
    </NavbarModule>
  )
}

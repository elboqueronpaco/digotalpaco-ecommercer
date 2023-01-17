import React from 'react'
import { ButtonBaseSignIn, ButtonSignUp } from '../../styles/ui/ButtonModule'
import { NavAuth } from '../../styles/ui/NavbarModule'
import { ButtonMenu } from './ButtonMenu'


export const NavbarAuth = (props) => {
  return (
    <NavAuth>
        <ButtonBaseSignIn onClick={props.link} to='/auth/sign-in'>Sign In</ButtonBaseSignIn>
        <ButtonSignUp onClick={props.link} to='/auth/sign-up'>Sign Up</ButtonSignUp>
        <ButtonMenu onClick={props.onClick} open={props.open}/>
    </NavAuth>
  ) 
}

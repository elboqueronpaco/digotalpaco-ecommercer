import React from 'react'
import { Link } from 'react-router-dom'
import { LogoImage } from './LogoImage'

export const Logo = (props) => {
  return (
       <Link to='/' className='flex items-center justify-center' onClick={props.onClick}>
            <LogoImage width='50px' />
            <span className="ml-2">digitalpaco</span>
        </Link> 
  )
}

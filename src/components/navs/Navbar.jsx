import React, { useState } from 'react'
import { Header } from '../ui/Header'
import { HeaderContainer } from '../../styles/ui/HeaderModule'
import { Logo } from '../ui/Logo'
import { ButtonMenu } from '../ui/ButtonMenu'
import { Nav } from '../ui/Nav'
import { NavbarAuth } from '../ui/NavbarAuth'
import { ButtonSignIn } from '../ui/ButtonSignIn'



export  function Navbar() {
  const [open, setOpen] = useState(false)
  const handleOnClickButton = () => {
    setOpen(!open)
    //console.log(open)
  }
  const handleOnClickLogo = () => {
    if (open === true) {
      setOpen(false)
      //console.log('cerrar menu')
    }
  }
  return (
    <Header>
      <HeaderContainer>
       <Logo onClick={handleOnClickLogo} />
       <Nav open={open} onClick={handleOnClickLogo} />
       <NavbarAuth link={handleOnClickLogo} onClick={handleOnClickButton} open={open}/>
        
      </HeaderContainer>
    </Header>
  )
}
import React from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Footer } from '../components/navs/Footer'
import { Navbar } from '../components/navs/Navbar'
import { MainModule } from '../styles/ui/MainModule'

const Layout = (props) => {
  return (
    <>
        <Navbar />
        <ToastContainer autoClose={5000}/>
        <MainModule>
          {props.children}
        </MainModule>
        <Footer />
    </>
  )
}

export default Layout
import React from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Footer } from '../components/navs/Footer'
import { Navbar } from '../components/navs/Navbar'

const Layout = (props) => {
  return (
    <>
        <Navbar />
        <ToastContainer autoClose={5000}/>
        {props.children}
        <Footer />
    </>
  )
}

export default Layout
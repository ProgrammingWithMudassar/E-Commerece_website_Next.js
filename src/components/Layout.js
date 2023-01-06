import React from 'react'
import Head from 'next/head'
import Container from '@mui/material/Container'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import styles from '../../styles/Home.module.css'

const Layout = ({ children }) => {
  return (
    <>
      <Head>Amazone</Head>
      {/* header  */}
      {/* <header><Navbar /></header> */}
      <Navbar />
      {/* main  */}
      <Container className={styles.container}>{children}</Container>
      {/* footer  */}
      <footer><Footer /></footer>
    </>
  )
}

export default Layout
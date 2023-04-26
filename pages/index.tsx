import Box from '@mui/material/Box';
import styles from '../styles/home.module.css';
import Navbar from '../src/components/navbar/Navbar';

export default function Home() {
  return (
    <Box className={styles['gradient__bg']}>
      <Navbar />
      {/* <Header /> */}
      {/* <Brand />
    <WhatGPT3 />
    <Features />
    <Possibility />
    <CTA />
    <Blog />
    <Footer /> */}
    </Box>
  );
}

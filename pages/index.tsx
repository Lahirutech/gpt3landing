import { Box, Container } from '@mui/material';
import styles from '../styles/home.module.css';
import Navbar from '../src/components/navbar/Navbar';
import Header from '../src/containers/header/Header';

export default function Home() {
  return (
    <Box className={styles['gradient__bg']}>
      <Navbar />
      <Header />
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

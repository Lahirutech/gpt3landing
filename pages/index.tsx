import { Box, Container } from '@mui/material';
import styles from '../styles/home.module.css';
import Navbar from '../src/components/navbar/Navbar';
import Header from '../src/containers/header/Header';
import Brand from '../src/components/brands/Brand';
import Whatgpt3 from '../src/containers/whatGPT3/Whatgpt3';
import Features from '../src/containers/Features/Features';
import Possibility from '../src/containers/possibility/Posible';
import CTA from '../src/components/cta/CTA';
import Blog from '../src/containers/blog/Blog';
import Footer from '../src/containers/footer/footer';

export default function Home() {
  return (
    <Box className={styles['gradient__bg']}>
      <Navbar />
      <Header />
      <Brand />
      <Whatgpt3 />
      <Features />
      {/* <Possibility /> */}
      <CTA />
      <Blog />
      <Footer />
    </Box>
  );
}

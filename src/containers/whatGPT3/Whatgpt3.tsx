import { Box, Typography, useMediaQuery } from '@mui/material';
import React from 'react';
import styles from '../whatGPT3/gpt3.module.css';
import hstyles from '../../../styles/home.module.css';
import Feature from '../../components/feature/Feature';
import { FeatureBox, GradientText } from './whatgpt3Styles';
import theme from '../../theme';

export default function Whatgpt3() {
  const isSmallScreen = useMediaQuery(() => theme.breakpoints.down('md'));
  return (
    <Box
      display={'flex'}
      flexDirection='column'
      padding={'2rem'}
      margin='4rem 6rem'
      className={`${styles.gpt3__whatgpt3}`}
    >
      <Box className={`${styles.gpt3__whatgpt3_feature}`}>
        <Feature
          title='What is GPT-3'
          text='We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on bWe so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.'
          direction={isSmallScreen ? 'column' : 'row'}
        />
      </Box>
      <Box
        display='flex'
        flexDirection={{ md: 'row', sm: 'column' }}
        alignItems={{ md: 'center', sm: 'flex-start' }}
        justifyContent='space-between'
      >
        <GradientText
          variant='h5'
          mt='1rem'
        >
          The possibilities are beyond your imagination
        </GradientText>
        <Typography variant='body1'> Explore the library</Typography>
      </Box>
      <FeatureBox>
        <Feature
          title='Chatbots'
          text='We so opinion friends me message as delight. Whole front do of plate heard oh ought.'
          direction='column'
        />
        <Feature
          title='Knowledgebase'
          text='At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b'
          direction='column'
        />
        <Feature
          title='Education'
          text='At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b'
          direction='column'
        />
      </FeatureBox>
    </Box>
  );
}

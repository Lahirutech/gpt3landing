import { Box, Typography } from '@mui/material';
import React from 'react';
import { GradientText } from '../whatGPT3/whatgpt3Styles';
import ImageWomen from '../../../public/assets/possibility.png';
import MainImage from '../../../public/assets/ai.png';
import Image from 'next/image';

export default function Possibility() {
  return (
    <Box
      display={'flex'}
      flexDirection={{ sm: 'column', md: 'row' }}
      alignItems={'center'}
      justifyContent={'center'}
      padding='4rem 6rem'
      id='possibility'
    >
      {/* <Box
        display={'flex'}
        flex={1}
        justifyContent={'flex-start'}
        alignItems={'center'}
        marginRight={'2rem'}
        position={'relative'}
        width={526}
        height='526px'
      > */}
      <Image
        src={ImageWomen}
        width={526}
        alt=''
      ></Image>
      {/* </Box> */}
      <Box
        display={'flex'}
        flexDirection={'column'}
        alignItems={'flex-start'}
        flex={1}
        justifyContent={'flex-end'}
        sx={{ '& > *': { marginBottom: '16px' } }}
        ml={2}
      >
        <Typography
          variant='h4'
          color={'#71E5FF'}
          fontSize='16px'
        >
          Request Early Access to Get Started
        </Typography>
        <Typography
          sx={{
            typography: { sm: 'h4', xs: 'h4', md: 'h4', lg: 'h3', xl: 'h3' },
          }}
        >
          The possibilities are <br />
          beyond your imagination
        </Typography>
        <Typography variant='body1'>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </Typography>
        <Typography
          variant='h4'
          color={'#71E5FF'}
          fontSize='16px'
        >
          Request Early Access to Get Started
        </Typography>
      </Box>
    </Box>
  );
}

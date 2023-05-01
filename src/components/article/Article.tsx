import { Box, Typography } from '@mui/material';
import React from 'react';

export default function Article({ imgUrl, date, text }: any) {
  return (
    <Box
      width={'100%'}
      minHeight={'100px'}
      display='flex'
      flexDirection={'column'}
    >
      <Box
        height={{ sm: '250px', md: '100%' }}
        width='100%'
        bgcolor={'#040c18'}
      >
        <img
          width={'100%'}
          height={'100%'}
          src={imgUrl}
          alt='blog_image'
        />
      </Box>
      <Box
        display={'flex'}
        flexDirection={'column'}
        justifyContent='space-between'
        padding={'1rem 1.5rem'}
        height='100%'
        sx={{ backgroundColor: '#042C54' }}
      >
        <Typography>{date}</Typography>
        <Typography>{text}</Typography>
        <Typography>Read full article</Typography>
      </Box>
    </Box>
  );
}

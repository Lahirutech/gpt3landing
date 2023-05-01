import { Box, Typography } from '@mui/material';
import React from 'react';
import Article from '../../components/article/Article';
import { GradientText } from '../whatGPT3/whatgpt3Styles';

export default function Blog() {
  return (
    <Box
      display={'flex'}
      margin={'4rem 6rem'}
      flexDirection='column'
      id='blog'
    >
      <GradientText variant='h2'>
        A lot is happening,
        <br /> We are blogging about it.
      </GradientText>

      <Box
        display={'flex'}
        flexDirection={{ md: 'row', sm: 'column-reverse' }}
      >
        <Box
          flex={1}
          marginRight='2rem'
          width={'100%'}
          height={{ sm: '250px' }}
          mt={{ sm: 2 }}
        >
          <Article
            imgUrl={'/assets/blog01.png'}
            date='Sep 26, 2021'
            text='GPT-3 and Open  AI is the future. Let us exlore how it is?'
          />
        </Box>

        <Box
          display={'grid'}
          flex={1}
          gridTemplateColumns={{ md: 'repeat(2,1fr)', sm: 'repeat(1, 1fr)' }}
          gap={'1rem'}
        >
          <Article
            imgUrl={'/assets/blog01.png'}
            date='Sep 26, 2021'
            text='GPT-3 and Open  AI is the future. Let us exlore how it is?'
          />
          <Article
            imgUrl={'/assets/blog01.png'}
            date='Sep 26, 2021'
            text='GPT-3 and Open  AI is the future. Let us exlore how it is?'
          />
          <Article
            imgUrl={'/assets/blog01.png'}
            date='Sep 26, 2021'
            text='GPT-3 and Open  AI is the future. Let us exlore how it is?'
          />
          <Article
            imgUrl={'/assets/blog01.png'}
            date='Sep 26, 2021'
            text='GPT-3 and Open  AI is the future. Let us exlore how it is?'
          />
        </Box>
      </Box>
    </Box>
  );
}

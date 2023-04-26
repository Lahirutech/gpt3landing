import { Box, Grid } from '@mui/material';
import Image from 'next/image';
import React from 'react';
const ImageName = [
  'google.png',
  'slack.png',
  'atlassian.png',
  'dropbox.png',
  'shopify.png',
];

export default function Brand() {
  return (
    <Box
      display={'flex'}
      alignItems='center'
      justifyContent='space-between'
      padding='4rem 6rem'
      flexWrap={'wrap'}
    >
      <Grid
        container
        spacing={2}
        direction='row'
        alignItems='center'
        justifyContent='center'
      >
        {ImageName.map((url) => (
          <Grid
            item
            xs={12 / 3}
            sm={12 / 5}
            key={url}
          >
            <Image
              alt=''
              src={`/assets/${url}`}
              width='72'
              height='25'
            ></Image>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

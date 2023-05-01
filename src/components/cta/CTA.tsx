import { Box, Button, Stack, Typography } from '@mui/material';
import React from 'react';

export default function CTA() {
  return (
    <Box
      display={'flex'}
      margin={'4rem 6rem'}
      flexDirection={{ xs: 'column', md: 'row' }}
      alignItems={'center'}
      justifyContent={'space-between'}
      padding='2rem'
      borderRadius='1rem'
      sx={{
        background: `linear-gradient(103.22deg, #ae67fa -13.86%, #f49867 99.55%)`,
      }}
    >
      <Box>
        <Stack>
          <Typography variant='body1'>
            Request Early Access to Get Started
          </Typography>
          <Typography variant='h4'>
            Register today & start exploring the endless possiblities.
          </Typography>
        </Stack>
      </Box>

      <Box>
        <Button
          sx={{
            backgroundColor: 'black',
            borderRadius: '10px',
            padding: '15px',
          }}
          variant='contained'
        >
          {' '}
          Get Started
        </Button>
      </Box>
    </Box>
  );
}

import { Container, Box, Typography, TextField, Stack } from '@mui/material';
import { EmailSubmitBtn, MainHeading } from './headerStyles';
import Image from 'next/image';
import MainImage from '../../../public/assets/ai.png';

function Header() {
  return (
    <Container maxWidth='xl'>
      <Box
        display='flex'
        flexDirection='row'
        id='home'
      >
        {/* header left side*/}
        <Box
          display='flex'
          flex={1}
          flexDirection='column'
          alignItems='flex-start'
          justifyContent='center'
          mr={{ sx: '0rem', md: '5rem' }}
        >
          <MainHeading
            sx={{
              typography: { sm: 'h5', xs: 'h4', md: 'h3', lg: 'h1', xl: 'h1' },
            }}
          >
            Let’s Build Something amazing with GPT-3 OpenAI
          </MainHeading>
          <Typography>
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy
            alteration boisterous the attachment. Party we years to order allow
            asked of.
          </Typography>
          <Stack
            direction='row'
            width={'100%'}
            margin='2rem 0 1rem'
          >
            <TextField
              fullWidth={true}
              sx={{
                width: '456',
                height: '73',

                input: {
                  '&::placeholder': {
                    color: 'white',
                  },
                  color: 'white',
                  backgroundColor: 'black',
                },

                flex: 2,
                '& .MuiOutlinedInput-root.Mui-focused': {
                  '& > fieldset': {
                    border: 'none',
                  },
                },
              }}
              placeholder='Your Email'
            />
            <EmailSubmitBtn>Get Started</EmailSubmitBtn>
          </Stack>
          <Stack
            direction='row'
            alignItems='center'
            // alignContent='center'
            spacing={1}
          >
            <Image
              src='/assets/people.png'
              alt=''
              width='181'
              height='38'
            ></Image>
            <Typography>
              1,600 people requested access a visit in last 24 hours
            </Typography>
          </Stack>
        </Box>
        <Box
          position='relative'
          sx={{
            display: {
              xs: 'none',
              sm: 'flex',
              md: 'flex',
              lg: 'flex',
              xl: 'flex',
            },
          }}
          width={{ sm: '250px', md: '400px', lg: '467px', xl: '667px' }}
          height='auto'
        >
          <Image
            src={MainImage}
            alt=''
            fill
          ></Image>
        </Box>
      </Box>
    </Container>
  );
}

export default Header;

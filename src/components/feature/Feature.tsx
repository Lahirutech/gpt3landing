import { Typography } from '@mui/material';
import { Box } from '@mui/system';

export default function Feature({
  title = 'title',
  text = 'text',
  direction,
}: {
  title: string;
  text: string;
  direction: 'row' | 'column';
}) {
  return (
    <Box
      display='flex'
      width='100%'
      margin={{ md: '1rem', sm: '1rem 0' }}
      flexDirection={direction}
      mt={5}
    >
      <Box
        flex={1}
        maxWidth='180px'
        mr='2rem'
      >
        <Box
          width={'38px'}
          height='3px'
          boxShadow={'0px 4px 4px rgba(0, 0, 0, 0.25)'}
          sx={{
            background:
              'linear-gradient(103.22deg, #ae67fa -13.86%, #f49867 99.55%)',
          }}
          mb={-2}
        />
        <h3>{title}</h3>
      </Box>
      <Box
        display='flex'
        flex={2}
        textAlign={'justify'}
      >
        <Typography
          color={'white'}
          fontSize={{ md: '14px', sm: '12px' }}
          lineHeight={{ md: '24px', sm: '20ox' }}
        >
          {text}
        </Typography>
      </Box>
    </Box>
  );
}

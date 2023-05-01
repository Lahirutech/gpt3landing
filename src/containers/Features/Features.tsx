import { Box, Typography, useMediaQuery } from '@mui/material';
import Feature from '../../components/feature/Feature';
import theme from '../../theme';
import { GradientText } from '../whatGPT3/whatgpt3Styles';

const featuresData = [
  {
    title: 'Improving end distrusts instantly',
    text: 'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.',
  },
  {
    title: 'Become the tended active',
    text: 'Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.',
  },
  {
    title: 'Message or am nothing',
    text: 'Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.',
  },
  {
    title: 'Really boy law county',
    text: 'Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush..',
  },
];
export default function Features() {
  const isSmallScreen = useMediaQuery(() => theme.breakpoints.down('md'));

  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      padding='4rem 6rem'
      flexDirection={{
        xs: 'column',
        sm: 'column',
        md: 'row',
        lg: 'row',
        xl: 'row',
      }}
    >
      <Box
        display={'flex'}
        alignItems={'flex-start'}
        justifyContent={'flex-start'}
        flex={1}
        flexDirection={'column'}
        mr={'5rem'}
      >
        <GradientText variant='h5'>
          The Future is Now and You Just Need To Realize It. Step into Future
          Today & Make it Happen.
        </GradientText>
        <Typography>Request Early Access to Get Started</Typography>
      </Box>
      <Box
        display={'flex'}
        flexDirection={'column'}
        alignItems={'center'}
        justifyContent={'flex-start'}
        flex={1.5}
      >
        <Box
          display={'flex'}
          flexDirection={'column'}
          alignItems={'center'}
          justifyContent={'space-between'}
        >
          {featuresData.map((item, index) => (
            <Feature
              title={item.title}
              text={item.text}
              key={item.title + index}
              direction={isSmallScreen ? 'column' : 'row'}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}

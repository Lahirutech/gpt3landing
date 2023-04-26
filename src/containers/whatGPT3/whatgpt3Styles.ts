import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';
import theme from '../../theme';
import { text } from 'stream/consumers';

export const FeatureBox = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  marginTop: '2rem',
  [theme.breakpoints.down('md')]: {
    flexWrap: 'wrap',
  },
});

export const GradientText = styled(Typography)({
  background: `linear-gradient(89.97deg, #ae67fa 1.84%, #f49867 102.67%)`,
  backgroundClip: 'text',
  '-webkit-background-clip': 'text',
  '-webkit-text-fill-color': 'transparent',
});

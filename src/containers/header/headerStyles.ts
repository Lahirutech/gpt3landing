import styled from '@emotion/styled';
import { Typography, Button } from '@mui/material';
import theme from '../../theme';

export const MainHeading = styled(Typography)({
  background: `linear-gradient(89.97deg, #ae67fa 1.84%, #f49867 102.67%)`,
  '-webkit-background-clip': 'text',
  '-webkit-text-fill-color': 'transparent',
  backgroundClip: 'text',
  color: 'transparent',
  [theme.breakpoints.down('sm')]: {
    textAlign: 'center',
  },
});
export const EmailSubmitBtn = styled(Button)`
  flex: 0.6;
  width: 100%;
  min-height: 50px;
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  background: #ff4820;
  border: 2px solid #ff4820;
  padding: 0 1rem;
  color: #fff;
  cursor: pointer;
  outline: none;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;

  ${() => theme.breakpoints.down('sm')} {
    font-size: 18px;
  }
`;

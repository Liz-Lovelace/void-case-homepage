import { createTheme } from '@mui/material';

export default createTheme({
    palette: {
    type: 'dark',
    primary: {
      main: '#66D9EE',
      light: '#76E9FE',
      dark: '#55BCCE',
    },
    secondary: {
      main: '#FA2772',
    },
    background: {
      default: '#272822',
      paper: '#34352d',
    },
    text: {
      primary: '#F1EBEB',
      secondary: '#e0d9d9',
    },
    info: {
      main: '#E7DB75',
    },
    success: {
      main: '#A7E22E',
    },
    divider: '#76715E',
  },
});

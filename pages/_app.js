import theme from '../stuff/theme.js';
import { ThemeProvider, CssBaseline } from '@mui/material/';

export default function App({ Component, pageProps }) {
  return <>
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
    />
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
    <style jsx global>{`
      body {
        background-color: ${theme.palette.background.default};
      }
      a {
        color: ${theme.palette.primary.main};
      }
      
      a:hover {
        color: ${theme.palette.primary.light};
      }
    `}</style>
  </>
}
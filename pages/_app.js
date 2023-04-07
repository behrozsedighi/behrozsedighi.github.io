import '@/styles/globals.css'
import { CssBaseline } from '@mui/material';
import { ThemeProvider,createTheme } from '@mui/material/styles';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  const theme = createTheme({
    palette: {
      background: {
        default: '#19101F',
      },
      customColor:{
        BgElement: '#201428',
        themeText:"#F6D251"
      }
    },
    typography: {
      fontFamily: inter.style.fontFamily,
      color:"#fff",
      allVariants: {
        color: "#fff"
      },
    },
  })
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Component {...pageProps}/>
      </CssBaseline>
    </ThemeProvider>
  )
}

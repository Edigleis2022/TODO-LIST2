import React from 'react'
import App from './App'
import ReactDOM from 'react-dom/client'
import { ThemeProvider,createTheme } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <App />
    </ThemeProvider >
  </React.StrictMode>,
)

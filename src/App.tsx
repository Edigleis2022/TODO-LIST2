import { ThemeProvider, createTheme, tY } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { AppBar, Toolbar, Typography } from '../node_modules/@mui/material/index';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
const theme = useTheme();

  return (
     <>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar sx={{

        }} >
          <Typography variant="h5" componet="h1">Todo</Typography>
        </Toolbar>
      </AppBar>
      <main>Todo list</main>
    </ThemeProvider>
    </>
  );
}

export default App;


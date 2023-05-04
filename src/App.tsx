import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { AppBar, Button, Container, Grid, TextField, Toolbar, Typography, useTheme } from '../node_modules/@mui/material/index';

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
      <AppBar position='static'>
        <Toolbar sx={{
            paddingTop:theme.spacing(2),
            paddingBottom:theme.spacing(2),
            display:"flex",
            justifyContent:'cente',
            alignItem:'center',
            '@media all': {
              minHeight: 200,
            }
        }} >
          <Typography variant="h5" componet="h1">
            Todo
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
         <Container>
        <Grid container spacing={theme.spacing(0.5)} >
              <Grid item xl={6} sm={12}>
                  <TextField name='task' fullWidth/>
              </Grid>
              <Grid xl={6} sm={12}>
                 <Button variant="contained">Criar</Button>
              </Grid>
        </Grid>
        </Container>
      </main>
    </ThemeProvider>
    </>
  );
}

export default App;


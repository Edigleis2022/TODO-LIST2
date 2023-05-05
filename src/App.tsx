import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { AppBar, Button, Container, Grid, TextField, Toolbar, Typography, colors, useTheme } from '../node_modules/@mui/material/index';

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
            paddingTop: theme.spacing(2),
            paddingBottom: theme.spacing(2),
            display: "flex",
            justifyContent: 'cente',
            alignItem: 'center',
            '@media all': {
              minHeight: 200,
            }
          }} >
            <Typography variant="h5" component="h1" >
              Todo
            </Typography>
          </Toolbar>
        </AppBar>
        <main>
        <Container sx={{
          position:'relative'
        }}>
            <Grid container spacing={theme.spacing(0.5)} sx={{
              position: 'absolute',
              top: '-27'
            }}>
              <Grid item xl={10} sm={12}>
                <TextField  variant='outlined' name='task' fullWidth sx={{
                  backgroundColor:colors.grey[800]
                }} />
              </Grid>
              <Grid  item xl={6} sm={12}>
                <Button variant="contained" fullWidth sx={{
                  height:'100%'
                }}>Criar</Button>
              </Grid>
            </Grid>
          </Container>
        </main>
      </ThemeProvider>
    </>
  );
}

export default App;


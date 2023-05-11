import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { AppBar, Badge, Button, Container, Grid, List, TextField, Toolbar, Typography, colors, useTheme } from '../node_modules/@mui/material/index';
import PlusCircle from '@phosphor-icons/react/dist/icons/PlusCircle';
import { CheckFat } from '@phosphor-icons/react';
import { List, ListItem, ListItemIcon, Checkbox, ListItemText } from '@material-ui/core';
import { useState } from 'react';



const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  const theme = useTheme();
  const [tasks, setTasks] = useState([]);
  const addTask = (task: string) => {
    setTasks([...tasks, task]);
  };

  const [newTask, setNewTask] = useState('');

  const handleSubmit = (escrever) => {
    escrever.preventDefault();
    addTask(newTask);
    setNewTask('');
  };



  return (

    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <AppBar position='static'>
          <Toolbar sx={{
            paddingTop: theme.spacing(2),
            paddingBottom: theme.spacing(2),
            display: "flex",
            justifyContent: 'center',
            alignItem: 'center',
            '@media all': {
              minHeight: 200,
            }
          }} >
            <Typography variant="h5" component="h1" sx={{
              display: 'flex',
              alignItems: 'center',
              gap: theme.spacing(2),
              color: theme.palette.primary.light

            }} >
              <CheckFat size={32} weight='fill' /> Lista de Tarefas
            </Typography>
          </Toolbar>
        </AppBar>


        <main>
          <Container sx={{
            position: 'relative'

          }}>
            <Grid container spacing={theme.spacing(0.5)} sx={{
              position: 'absolute',
              top: '-27px'
            }}>
              <Grid item xl={10} sm={12}>
                <TextField
                  placeholder='Adicione uma nova tarefa'
                  variant='outlined'
                  name='task' fullWidth

                  sx={{
                    backgroundColor: colors.grey[800]
                  }} />
              </Grid>

              <Grid item xl={2} sm={12}>
                <Button variant="contained" fullWidth sx={{
                  height: '100%'
                }}>
                  <span> Criar </span><PlusCircle size={32} />
                </Button>
              </Grid>

              <Grid container spacing={theme.spacing(1)} sx={{
                marginTop: '25px'
              }} >
                <Grid item >
                  <Typography variant='caption' sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: theme.spacing(2),
                    paddingLeft: '5px'
                  }} >
                    <span>Tarefas Criadas</span>
                    <Badge color='primary' badgeContent={0} showZero></Badge>
                  </Typography>
                </Grid>

              </Grid>

            </Grid>

          </Container>
        </main>
        <main>
          <Container>
            <Grid>
              <List>
                {tasks.map((task, index) => (
                  <ListItem key={index} dense button>
                    <ListItemIcon>
                      <Checkbox />
                    </ListItemIcon>
                    <ListItemText primary={task} />
                  </ListItem>
                ))}
              </List>
              <form onSubmit={handleSubmit}>
                <TextField
                  label="Nova Tarefa"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                />
                <Button type="submit" variant="contained" color="primary">
                  Adicionar
                </Button>
              </form>
            </Grid>
          </Container>
        </main>

      </ThemeProvider >
    </>
  );
}

export default App;


import { CheckFat } from '@phosphor-icons/react';

function TemaAbertura() {
    return (
        <>
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

        </>
    )
} 

export default TemaAbertura;
import { List, ListItem, ListItemIcon, Checkbox, ListItemText } from '@material-ui/core';



function TarefaLayout() {

    const [tasks, setTasks] = useState([]);

    const [newTask, setNewTask] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(newTask);
        setNewTask('');
    };

    const addTask = (task) => {
        setTasks([...tasks, task]);
    };


    return (
        <>
            <List>
                {tasks.map((task, index) => (
                    <ListItem key={index} dense button>
                        <ListItemIcon>
                            <Checkbox />
                        </ListItemIcon>
                        <ListItemText primary={task} />
                    </ListItem>
                ))}

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
            </List>



        </>
    )
}

export default TarefaLayout;
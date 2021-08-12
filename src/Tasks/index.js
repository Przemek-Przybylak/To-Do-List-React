import { List, Item, Button, Content } from "./styled";

const Tasks = ({ tasks, hideDone, removeTasks, toggleTaskDone }) => (
    <List>
        {tasks.map(task => (
            <Item key={task.id}
                hidden={task.done && hideDone}
            >
                <Button 
                onClick={ () => toggleTaskDone(task.id)}
                toggleDone
                >
                    {task.done ? "✔" : ""}
                </Button>
                <Content 
                done
                >
                    {task.content}</Content>
                <Button 
                onClick={ () => removeTasks(task.id)} 
                remove
                >🗑
                </Button>
            </Item>
        ))}
    </List>
)

export default Tasks;
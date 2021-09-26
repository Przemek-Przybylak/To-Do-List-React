import { List, Item, Button, Content } from "./styled";
import { selectTasks } from "../tasksSlice";
import { useSelector } from "react-redux";

const TasksList = ({ removeTask, toggleTaskDone }) => {
    const {tasks, hideDone} = useSelector(selectTasks)
    
    return (<List>
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
                onClick={ () => removeTask(task.id)} 
                remove
                >🗑
                </Button>
            </Item>
        ))}
    </List>)
}

export default TasksList;
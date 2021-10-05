import { List, Item, Button, Content } from "./styled";
import { selectTasks, toggleTaskDone } from "../tasksSlice";
import { useSelector, useDispatch } from "react-redux";

const TasksList = ({ removeTask }) => {
    const { tasks, hideDone } = useSelector(selectTasks);
    const dispatch = useDispatch();

    return (
        <List>
            {tasks.map((task) => (
                <Item
                    key={task.id}
                    hidden={task.done && hideDone}
                >
                    <Button
                        onClick={() => dispatch(toggleTaskDone(task.id))}
                        toggleDone
                    >
                        {task.done ? "✔" : ""}
                    </Button>
                    <Content
                        done
                    >
                        {task.content}
                    </Content>
                    <Button
                        onClick={() => removeTask(task.id)}
                        remove
                    >
                        🗑
                    </Button>
                </Item>
            ))}
        </List>
    );
};

export default TasksList
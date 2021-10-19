import { List, Item, Button, Content } from "./styled";
import { selectTasks, toggleTaskDone, removeTask } from "../../tasksSlice";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const TasksList = () => {
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
                        <Link to={`/zadania/${task.id}`}>{task.content}</Link>
                    </Content>
                    <Button
                        onClick={() => dispatch(removeTask(task.id))}
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
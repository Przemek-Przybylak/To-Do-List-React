
import { useDispatch } from "react-redux";
import { ButtonItem } from "../Buttons/styled";
import { fetchExampleTasks } from "../features/tasks/tasksSlice";

export const Button = () => {
    const dispatch = useDispatch
    return (

        <ButtonItem
            onClick={() => dispatch(fetchExampleTasks())}>
            Pobierz przykładowe zadania
        </ButtonItem>

    )
}
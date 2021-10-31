import { useDispatch, useSelector } from "react-redux";
import { ButtonItem } from "../Buttons/styled";
import { fetchExampleTasks, selectLoading } from "../features/tasks/tasksSlice";

export const Button = () => {
    const dispatch = useDispatch();
    const loading = useSelector(selectLoading);

    return (
        <ButtonItem disabled={loading} onClick={() => dispatch(fetchExampleTasks())}>
            {
                loading ? "Ładowanie..." : "Pobierz przykładowe zadania"
            }
        </ButtonItem>
    )
};
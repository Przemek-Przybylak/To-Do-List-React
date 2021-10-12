import { useSelector, useDispatch } from "react-redux";
import { ButtonItem } from "./styled"
import { selectTasks, toggleHideDone, setAllDone } from "../../src/features/tasks/tasksSlice";

const Buttons = () => {
  const { tasks, hideDone } = useSelector(selectTasks);
  const dispatch = useDispatch();

  if (tasks.length === 0)
    return null;

  return (
    <div>
      <ButtonItem
        onClick={() => dispatch(toggleHideDone())}
        disabled={tasks.every(({ done }) => done)}
      >
        {hideDone ? "Pokaż" : "Ukryj"} ukończone
      </ButtonItem>
      <ButtonItem
        onClick={() => dispatch(setAllDone())}
        disabled={tasks.every(({ done }) => done)}
      >
        Ukończ wszystkie
      </ButtonItem>
    </div>
  );
};

export default Buttons
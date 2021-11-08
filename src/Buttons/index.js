import { useSelector, useDispatch } from "react-redux";
import { ButtonItem } from "./styled"
import { toggleHideDone, setAllDone, selectHideDone, selectTask } from "../../src/features/tasks/tasksSlice";

const Buttons = () => {
  const hideDone = useSelector(selectHideDone);
  const tasks = useSelector(selectTask);
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
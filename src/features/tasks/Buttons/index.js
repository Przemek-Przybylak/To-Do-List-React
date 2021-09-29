import { useSelector, useDispatch } from "react-redux";
import { ButtonItem } from "./styled"
import { selectTasks, toggleHideDone } from "../tasksSlice";

const Buttons = ({ setAllDone }) => {
  const { tasks, hideDone } = useSelector(selectTasks);
  const dispatch = useDispatch();

  if (tasks.lenght === 0)
    return null
      ;

  return (
    <div>
      <ButtonItem
        onClick={() => dispatch(toggleHideDone())}
        disabled={tasks.every(({ done }) => done)}
      >
        {hideDone ? "Pokaż" : "Ukryj"} ukończone
      </ButtonItem>
      <ButtonItem
        onClick={setAllDone}
        disabled={tasks.every(({ done }) => done)}
      >
        Ukończ wszystkie
      </ButtonItem>
    </div>
  );
};

export default Buttons
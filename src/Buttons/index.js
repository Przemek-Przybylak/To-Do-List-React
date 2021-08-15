import { ButtonItem } from "./styled"

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => {

  if (tasks.lenght === 0) {
    return null
  };

  return (
    <div>
      <ButtonItem
        onClick={toggleHideDone}
        disabled={tasks.every(({ done }) => done)}
      >
        {hideDone ? "Pokaż" : "Ukryj"} ukończone
      </ButtonItem>
      <ButtonItem
        onClick={setAllDone}
        disabled={tasks.every(({ done }) => done)}
      >Ukończ wszystkie</ButtonItem>
    </div>
  );
};

export default Buttons
import "./style.css";

const Buttons = ({ tasks, hideDone, toggleHideDone }) => {

  if (tasks.lenght === 0) {
    return null
  }

  return (
    <div className="button">
      <button
        onClick={toggleHideDone}
        className="button__item button__item--hidingDone"
        disabled={tasks.every(({ done }) => done)}
      >
        {hideDone ? "Pokaż" : "Ukryj"} ukończone
      </button>
      <button className="button__item button__item--doneAll"
        disabled={tasks.every(({ done }) => done)}
      >Ukończ wszystkie</button>

    </div>
  )
};




export default Buttons
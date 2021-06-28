import "./style.css";

const Buttons = ({ tasks, hideDoneTasks }) => {

  if (tasks.lenght === 0) {
    return null
  }

  return (
    <div className="button">
      <button className="button__item button__item--hidingDone"
        disabled={tasks.every(({ done }) => done)}
      >
        {hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone
      </button>
      <button className="button__item button__item--doneAll"
        disabled={tasks.every(({ done }) => done)}
      >Ukończ wszystkie</button>

    </div>
  )
};




export default Buttons
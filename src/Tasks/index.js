import "./style.css";

const Tasks = ({ tasks, hideDone }) => (
    <ul className="section__list ">
        {tasks.map(task => (
            <li key={task.id}
                className={`section__item ${hideDone && task.done ? "button--hidden" : ""}`}
            >
                <button className="section__imageButton section__imageButton--green"
                >
                    {task.done ? "✔" : ""}
                </button>
                <span className={`section__task ${task.done ? "section__item--strikeout" : ""}`}
                >
                    {task.content}</span>
                <button className="section__imageButton section__imageButton--red"
                >🗑
                </button>
            </li>
        ))}
    </ul>
)

export default Tasks;
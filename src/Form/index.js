import "./style.css";

const Form = () => (
    <form className="section__form">
        <p className="section__paragraph">
            <label>
                <input className="section__input"
                    name="task"
                    placeholder="Co jest do zrobienia?"
                />
            </label>
        </p>
        <button className="section__button">
            Dodaj zadanie
        </button>
    </form>
);

export default Form
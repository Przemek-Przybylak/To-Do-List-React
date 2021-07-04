import { useState } from "react";
import "./style.css";

const Form = ({addNewTask}) => {

    const [content, setcontent] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        addNewTask(content.trim());
        setcontent("");
    };

    return (
        <form className="section__form" onSubmit={onFormSubmit}>
            <p className="section__paragraph">
                <label>
                    <input
                        value={content}
                        onChange={({target}) => setcontent(target.value)}
                        className="section__input"
                        placeholder="Co jest do zrobienia?"
                    />
                </label>
            </p>
            <button className="section__button">
                Dodaj zadanie
            </button>
        </form>
    );
}

export default Form
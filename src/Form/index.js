import { useState } from "react";
import { StyledForm, StyledButton, StyledInput, StyledParagraph } from "./styled";

const Form = ({ addNewTask }) => {

    const [content, setcontent] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        addNewTask(content.trim());
        setcontent("");
    };

    return (
        <StyledForm onSubmit={onFormSubmit}>
            <StyledParagraph>
                <label>
                    <StyledInput
                        value={content}
                        onChange={({ target }) => setcontent(target.value)}
                        placeholder="Co jest do zrobienia?"
                    />
                </label>
            </StyledParagraph>
            <StyledButton>
                Dodaj zadanie
            </StyledButton>
        </StyledForm>
    );
}

export default Form
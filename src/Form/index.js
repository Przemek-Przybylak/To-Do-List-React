import { useRef, useState } from "react";
import { StyledForm, StyledButton, StyledInput, StyledParagraph } from "./styled";

const Form = ({ addNewTask }) => {

    const [content, setcontent] = useState("");
    const inputRef = useRef(null);

    const onFormSubmit = (event) => {
        event.preventDefault();
        addNewTask(content.trim());
        setcontent("");
        inputRef.current.focus();
    };

    return (
        <StyledForm onSubmit={onFormSubmit}>
            <StyledParagraph>
                <label>
                    <StyledInput
                        ref={inputRef}
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
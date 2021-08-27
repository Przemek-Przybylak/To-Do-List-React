import { useRef, useState } from "react";
import { StyledForm, Button, Input, Paragraph } from "./styled";

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
            <Paragraph>
                <label>
                    <Input
                        ref={inputRef}
                        value={content}
                        onChange={({ target }) => setcontent(target.value)}
                        placeholder="Co jest do zrobienia?"
                    />
                </label>
            </Paragraph>
            <Button>
                Dodaj zadanie
            </Button>
        </StyledForm>
    );
}

export default Form
import { nanoid } from "@reduxjs/toolkit";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../tasksSlice";
import { StyledForm, Button, Input, Paragraph } from "./styled";

const Form = () => {
    const [content, setcontent] = useState("");
    const dispatch = useDispatch();

    dispatch(addTask ({
        content: content.trim(),
        done: false,
        id: nanoid,
    }))

    const inputRef = useRef(null);

    const onFormSubmit = (event) => {
        event.preventDefault();
        addTask();
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
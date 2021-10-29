import { nanoid } from "@reduxjs/toolkit";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../tasksSlice";
import { StyledForm, Button } from "./styled";
import { Input, Paragraph } from "../Input/index"

const Form = () => {
    const [content, setcontent] = useState("");
    const dispatch = useDispatch();
    const inputRef = useRef(null);

    const onFormSubmit = (event) => {
        event.preventDefault();
        dispatch(addTask({
            content: content.trim(),
            done: false,
            id: nanoid(),
        }));
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
};

export default Form
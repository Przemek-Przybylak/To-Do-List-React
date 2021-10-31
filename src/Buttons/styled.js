import styled, { css } from "styled-components";

export const ButtonItem = styled.button`
    border: none;
    color: teal;
    padding: 20px;
    background-color: white;
    transition: 0.5s;

    @media (max-width: 767px) {
    width: 100%;
    };

    &:hover{
    color: rgb(56, 179, 179);
    cursor: pointer;
    };

    ${({ disabled }) => disabled && css`
        color: #ccc;
        cursor: not-allowed;
    `}

    &:disabled{
    color: #ccc;
    };
`;
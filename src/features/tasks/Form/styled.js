import styled from "styled-components";

export const StyledForm = styled.form`
    display: flex;
    justify-content: flex-start;
    align-items: center;

    @media (max-width: 767px) {
    flex-wrap: wrap;
    align-items: center;
    };
`;

export const Button = styled.button`
    height: 40px;
    margin-left: 15px;
    margin-right: 15px;
    width: 150px;
    background-color: teal;
    color: white;
    border: none;
    transition: 0.5s;

    @media (max-width:767px) {
    align-self: center;
    margin-bottom: 20px;
    width: 90%;
    margin-right: auto;
    margin-left: auto;
    };

    &:hover{
    background-color: rgb(56, 179, 179);
    transform: scale(1.1);
    };
`;


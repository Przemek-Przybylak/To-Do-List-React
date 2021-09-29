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

export const Input = styled.input`
    font-size: 20px;
    width: 100%;
    padding: 10px;
    height: 40px;
    border: 1px solid rgb(214, 214, 214);

    @media (max-width:767px) {
    margin-right: 5%;
    margin-left: 5%;
    width: 90%;
    };
`;

export const Paragraph = styled.p`
    flex-basis: 100%;
    padding: 0px 0px 0px 20px;
`;
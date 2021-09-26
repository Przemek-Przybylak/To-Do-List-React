import styled, {css} from "styled-components";

    export const List = styled.ul`
        margin: 0px;
        list-style: none;
        padding: 30px 30px;
    `;

    export const Item = styled.li`
        display: flex;
        border-bottom: 1px solid rgb(214, 214, 214);
        padding: 10px 0px;
        align-items: center;
        word-break: break-all;
    
        ${({ hidden }) => hidden  && css`
            display: none;
        `};
    `;

    export const Button = styled.button`
        width: 25px;
        height: 25px;
        flex-shrink: 0;
        border: none;

        ${({remove}) => remove && css`
            margin-left: auto;
            margin-right: 1px;
            background-color: rgb(228, 39, 39);
            background-position: center;
            background-size: cover;
            color: white;
            transition: 0.5s;

            &:hover{
                background-color: rgb(255, 101, 45);
            }
        `};

        ${({toggleDone}) => toggleDone && css`
            margin-right: 10px;
            background-color: darkgreen;
            background-position: center;
            transition: 0.5s;
            background-size: cover;
            color: white;

            $:hover{
                background-color: forestgreen;
            }
        `};
    `;

    export const Content = styled.span `
        ${({done}) => done && css`
        margin: 0 10px;
        `};
    `
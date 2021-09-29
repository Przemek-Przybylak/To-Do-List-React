import styled from "styled-components";

export const Container = styled.main`
    background-color: #eee;
    font-family: 'Ubuntu', sans-serif;
    padding: 50px 300px;
    height: 100vh;
    box-sizing: border-box;

@media (max-width: 996px) {
    padding: 30px 20px;
    };

&*, ::after, ::before {
    box-sizing: inherit;
    };
`;
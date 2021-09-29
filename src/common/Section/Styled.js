import styled from "styled-components";

export const StyledSection = styled.section`
    margin: 20px auto;
    background-color: white;
`;

export const SectionContainer = styled.div`
    border-bottom: 1px solid rgb(214, 214, 214);
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 767px) {
    flex-wrap: wrap;
    justify-content: center;
    };
`;

export const Tittle = styled.h2`
    padding: 30px;
    font-size: 22px;
    margin-bottom: 0;
    margin-top: 0px;

    @media (max-width: 767px) {
    width: 100%;
    };
`;
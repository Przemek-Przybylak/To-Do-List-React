import { Tittle, StyledSection, SectionContainer } from "./Styled"

const Section = ({ tittle, body, extraHeaderContent }) => (
    <StyledSection>
        <SectionContainer>
            <Tittle>
                {tittle}
            </Tittle>
            {extraHeaderContent}
        </SectionContainer>
        {body}
    </StyledSection>
);

export default Section
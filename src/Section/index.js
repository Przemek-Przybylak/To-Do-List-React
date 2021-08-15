import { SectionTittle, StyledSection, StyledSectionContainer } from "./Styled"

const Section = ({ tittle, body, extraHeaderContent }) => (
    <StyledSection>
        <StyledSectionContainer>
            <SectionTittle>{tittle}</SectionTittle>
            {extraHeaderContent}
        </StyledSectionContainer>
        {body}
    </StyledSection>
)

export default Section
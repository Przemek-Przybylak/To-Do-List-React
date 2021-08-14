import { SectionTittle, StyledSection, StyledSectionContainer } from "./Styled"

const Section = ({ tittle, body, extraHeaderContent }) => (
    <StyledSection className="section section__tasks">
        <StyledSectionContainer className="section__container section__container--tittleTask">
            <SectionTittle className="section__tittle">{tittle}</SectionTittle>
            {extraHeaderContent}
        </StyledSectionContainer>
        {body}
    </StyledSection>
)

export default Section
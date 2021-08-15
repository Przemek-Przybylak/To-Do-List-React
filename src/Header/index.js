import { StyledHeader, StyledHeaderTittle } from "./styled";

const Header = ({ tittle }) => (
    <StyledHeader>
        <StyledHeaderTittle>{tittle}</StyledHeaderTittle>
    </StyledHeader>
)

export default Header
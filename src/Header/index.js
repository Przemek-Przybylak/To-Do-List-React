import { StyledHeader, StyledHeaderTittle } from "./styled";

const Header = ({ tittle }) => (
    <StyledHeader className="header">
        <StyledHeaderTittle className="header__tittle">{tittle}</StyledHeaderTittle>
    </StyledHeader>
)

export default Header
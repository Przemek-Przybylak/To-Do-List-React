import { StyledHeader, Tittle } from "./styled";

const Header = ({ tittle }) => (
    <StyledHeader>
        <Tittle>
            {tittle}
        </Tittle>
    </StyledHeader>
);

export default Header
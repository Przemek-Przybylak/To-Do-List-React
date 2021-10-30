import { StyledNavLink } from "../../styled";
import { Ul, Li } from "./styled"


export const NavList = () => {
    return (
        <Ul>
            <Li>
                <StyledNavLink to="/zadania">Zadania</StyledNavLink>
            </Li>
            <Li>
                <StyledNavLink to="/author">O autorze</StyledNavLink>
            </Li>
        </Ul>
    )
}
import { Link } from "react-router-dom";
import { Ul, Li, Span } from "./styled"

export const NavList = () => {
    return (
        <Ul>
            <Li>
                <Link to="/zadania"><Span>Zadania</Span></Link>
            </Li>
            <Li>
                <Link to="/author"><Span>O autorze</Span></Link>
            </Li>
        </Ul>
    )
}
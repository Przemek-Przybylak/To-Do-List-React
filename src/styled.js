import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    color: white;

    &.active {
        color: red;
    }
`;
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    color: white;

    &.active {
        font-weight: 700;
    }
`;

export const StyledLink = styled(Link)`
    color: teal;
    text-decoration: none;
`;
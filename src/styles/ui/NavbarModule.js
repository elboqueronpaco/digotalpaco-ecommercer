import styled from 'styled-components';
import { breakpoints } from '../../themes/grid';

export const NavbarModule = styled.nav`
    position: fixed;
    top: 4rem;
    width: 100%;
    left: ${props => props.open ? '0' : '110vw'};
    bottom: 0;
    background-color: #fff;
    z-index: 9;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    padding-left: 2rem;

    @media screen and (min-width: ${breakpoints.md}) {
    position: static;
    flex-direction: row;
    justify-content: flex-start;
    gap: 16px;
    background-color: transparent;
    align-items: center;
    padding-left: 0;
    }
`
export const NavAuth = styled.nav`
    position: static;
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    border-color: red;
`
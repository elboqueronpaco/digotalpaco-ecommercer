import styled from 'styled-components';
import { colors } from '../../themes/colors';
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
    justify-content: flex-end;
    background-color: transparent;
    align-items: center;
    padding-left: 0;
    }
`
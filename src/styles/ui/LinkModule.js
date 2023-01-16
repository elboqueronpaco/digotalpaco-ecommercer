import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { colors } from '../../themes/colors'
import { breakpoints } from '../../themes/grid'

export const LinkModule = styled(NavLink)`
    width: 100%;
    display: block;
    padding: 2rem 0;
    @media screen and (min-width: ${breakpoints.md}) {
        display: inline-flex;
        width: auto;
        padding: 1rem;
        :hover, &.active {
            color: ${colors.primary};
            border-bottom: thin solid ${colors.primary};
        }
    }
`
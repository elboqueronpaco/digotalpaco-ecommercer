import styled from 'styled-components'
import { breakpoints } from '../../themes/grid'

export const ButtonBaseIcon= styled.button`
    transition: all .5s ease-in-out;
    @media screen and (min-width: ${breakpoints.md}) {
        display: none;
    }
`
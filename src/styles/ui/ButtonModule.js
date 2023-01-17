import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { colors } from '../../themes/colors'
import { breakpoints } from '../../themes/grid'

export const ButtonBaseIcon= styled.button`
    transition: all .5s ease-in-out;
    @media screen and (min-width: ${breakpoints.md}) {
        display: none;
    }
`
export const ButtonBaseSignIn = styled(Link)`
    border:thin solid ${colors.primary};
    padding: .25rem .75rem;
    color: ${colors.primary};
    border-radius: 5px;
    font-size: 12px;
    margin-right: .25rem;
    margin-left: .25rem;
    :hover{
        border: none;
        background-color: ${colors.primary};
        color: white;
        opacity: .75;
    }
`
export const ButtonSignUp = styled(Link)`
    border: none;
    background-color: ${colors.primary};
    padding: .25rem .75rem;
    color: white;
    border-radius: 5px;
    font-size: 12px;
    margin-right: .25rem;
    margin-left: .25rem;
    :hover{
        border:thin solid ${colors.primary};
        color: ${colors.primary};
        background-color: #fff;
        opacity:  .75;
    }
`
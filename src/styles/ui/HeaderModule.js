import styled from 'styled-components'
import { Container } from './Container'

export const HeaderModule = styled.header`
    position: sticky;
    width: 100%;
    top: 0;
    left: 0;
    right: 0;
    height: 4rem;
    border-bottom: thin solid #4f46e5;
    background-color: #fff;
    z-index: 10;
`
export const HeaderContainer = styled(Container)`
    display: flex;
    //background-color: aliceblue;
    justify-content: space-between;
    align-items: center;
`
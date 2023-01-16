import styled from 'styled-components';
import { breakpoints, maxWidths } from '../../themes/grid';

export const Container = styled.section`
    margin-left: auto;
    margin-right: auto;
    box-sizing: border-box;
    width: 100%;
    max-width: ${maxWidths.xs};
    height: inherit;
    @media screen and (min-width: ${breakpoints.xs}) {
        max-width: 24.25rem;
    }
    @media screen and (min-width: ${breakpoints.sm}) {
        max-width: ${maxWidths.sm};
    }
    @media screen and (min-width: ${breakpoints.md}) {
        max-width: ${maxWidths.md};
    }
    @media screen and (min-width: ${breakpoints.lg}) {
        max-width: ${maxWidths.lg};
    }
    @media screen and (min-width: ${breakpoints.xl}) {
        max-width: ${maxWidths.xl};
    }
    @media screen and (min-width: ${breakpoints.xll}) {
        max-width: ${maxWidths.xll};
    }

`
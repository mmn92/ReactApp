import styled from 'styled-components';

export const Header = styled.header`
    position: absolute;
    top: 0;
    /*redundant*/
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--color-negative);
    width: 100vw;
    height: var(--height-header);
    text-align: center;
    box-shadow: 0 4px 2px var(--color-negative-dark);
`;

export const Title = styled.h1`
    color: var(--color-zero);
    line-height: var(--height-header);
`;
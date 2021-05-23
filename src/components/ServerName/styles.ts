import styled from 'styled-components';
import { ExpandMore } from 'styled-icons/material';

export const Container = styled.div`
    grid-area: ServerName;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 11px 0 16px;

    background-color: var(--secondary);

    box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 0px 0px;
    z-index: 2;

    cursor: pointer;
    transition: background-color .2s;

    &:hover {
        background-color: var(--secondary-outline);
    }
`;

export const Title = styled.h1`
    font-size: 15px;
    font-weight: bold;

    color: var(--white);
`;

export const ExpandIcon = styled(ExpandMore)`
    width: 24px;
    height: 24px;

    color: var(--white);

    cursor: pointer;
`;

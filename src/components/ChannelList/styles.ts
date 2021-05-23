import styled from 'styled-components';
import { Add } from 'styled-icons/material';
import { ExpandMore } from 'styled-icons/material';

export const Container = styled.div`
    grid-area: ChannelList;

    display: flex;
    flex-direction: column;

    padding: 22px 9.5px 0 6px;

    background-color: var(--secondary);
`;

export const Category = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 6px;

    cursor: pointer;

    &:hover {
        > div span, svg {
            color: white;
        }
    }

    &:not(:first-child) {
        margin-top: 12px;
    }

    > div span {
        text-transform: uppercase;
        font-size: 12px;
        font-weight: 600;
        color: var(--gray);

        margin-left: 2px;
    }
`;

export const ExpandIcon = styled(ExpandMore)`
    width: 13px;
    height: 13px;

    color: var(--gray);
`;

export const AddCategoryIcon = styled(Add)`
    width: 21px;
    height: 21px;

    color: var(--symbol);

    cursor: pointer;
`;

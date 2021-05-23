import styled from 'styled-components';

export const Container = styled.div`
    grid-area: UserList;

    display: flex;
    flex-direction: column;

    padding: 3px 6px 0 16px;

    background-color: var(--secondary);

    max-height: calc(100vh - 46px);
    overflow-y: scroll;

    ::-webkit-scrollbar {
        width: 4px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: var(--tertiary);
        border-radius: 4px;
    }

    ::-webkit-scrollbar-track {
        background-color: var(--secondary);
    }
`;

export const Role = styled.span`
    margin-top: 20px;

    text-transform: uppercase;
    font-size: 12px;
    font-weight: 500;
    color: var(--gray);
`;

export const User = styled.div`
    display: flex;
    align-items: center;

    margin-bottom: 5px;
    padding: 5px;

    cursor: pointer;

    border-radius: 4px;

    background-color: transparent;
    transition: background-color .2s;

    &:hover {
        background-color: rgba(255, 255, 255, .1);
    }

    > strong {
        margin-left: 13px;
        font-weight: 500;
        color: var(--white);
        opacity: .7;

        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }

    > span {
        margin-left: 9px;
        padding: 4px 5px;

        border-radius: 4px;

        background-color: var(--discord);
        color: var(--white);

        text-transform: uppercase;
        font-weight: bold;
        font-size: 11px;
    }
`;

export const Avatar = styled.div`
    flex-shrink: 0;

    width: 32px;
    height: 32px;

    color: var(--primary);
    background-color: var(--primary);

    border-radius: 50%;

    &.bot {
        background-color: var(--mention-detail);
    }
`;

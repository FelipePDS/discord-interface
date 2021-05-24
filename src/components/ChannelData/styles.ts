import styled from 'styled-components';

import { AlternateEmail } from 'styled-icons/material';

export const Container = styled.div`
    grid-area: ChannelData;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    background-color: var(--primary);
`;

export const Messages = styled.div`
    display: flex;
    flex-direction: column;

    padding: 20px 0;
    max-height: calc(100vh - 46px - 68px);
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

export const InputWrapper = styled.div`
    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 68px;
    padding: 0 16px;

    > svg {
        position: absolute;
        top: calc(50% - 12px);
        left: 28px;

        transition: 180ms ease-in-out;
    }
`;

export const Input = styled.input`
    position: relative;

    width: 100%;
    height: 44px;
    padding: 0 10px 0 57px;
    border-radius: 7px;
    
    color: var(--white);
    background-color: var(--chat-input);

    &::placeholder {
        color: var(--gray);
    }
`;

export const InputIcon = styled(AlternateEmail)`
    width: 24px;
    height: 24px;
    color: var(--gray);
`;

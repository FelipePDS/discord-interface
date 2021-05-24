import styled from 'styled-components';

import { EmojiAdd } from 'styled-icons/fluentui-system-filled';
import { Share } from 'styled-icons/boxicons-solid';
import { MoreHorizontalOutline } from 'styled-icons/evaicons-outline';

export const Container = styled.div`
    position: relative;

    display: flex;
    align-items: center;

    padding: 4px 16px;
    margin-right: 4px;

    background-color: transparent;

    &:hover {
        background-color: var(--primary-darker-outline);
    }

    &.mention {
        background-color: var(--mention-message);

        border-left: 2px solid var(--mention-detail);
        padding-left: 14px;
    };

    & + div {
        margin-top: 13px;
    };

    &:hover .message-options {
        opacity: 1;
    }
`;

export const Avatar = styled.div`
    width: 40px;
    height: 40px;

    background-color: var(--secondary);
    border-radius: 50%;

    &.bot {
        background-color: var(--mention-detail);
    };
`;

export const Message = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    min-height: 40px;
    margin-left: 17px;
`;

export const Header = styled.div`
    display: flex;
    align-items: center;

    > strong {
        color: var(--white);
        font-size: 16px;
    };

    & strong:hover {
        cursor: pointer;
        text-decoration: underline;
    }

    > span {
        margin-left: 6px;
        padding: 4px 5px;

        border-radius: 4px;

        background-color: var(--discord);
        color: var(--white);

        text-transform: uppercase;
        font-weight: bold;
        font-size: 11px;
    };

    > time {
        margin-left: 6px;
        
        color: var(--gray);
        font-size: 13px;
    };
`;

export const Content = styled.div`
    text-align: left;
    font-size:  1rem;
    color: var(--normal-text);
`;

export const Mention = styled.span`
    color: var(--link);

    cursor: pointer;
    
    &:hover {
        text-decoration: underline;
    };
`;

export const MessageOptions = styled.div`
    opacity: 0;

    position: absolute;
    right: 14px;
    top: -16px;

    display: flex;
    align-items: center;

    height: 32px;

    padding: 0 7px;

    border-radius: 4px;

    background-color: var(--primary);
    box-shadow: 0 0 0 1px rgba(4, 4, 5, 0.15);

    cursor: pointer;

    transition: box-shadow .2s;

    > svg {
        width: 20px;
        height: 20px;

        color: var(--icon-gray);
    }

    > svg+svg {
        margin-left: 12px;
    }

    &:hover {
        box-shadow: 0 0 0 2px rgba(4, 4, 5, 0.15);
    }
`;

export const EmoijIcon = styled(EmojiAdd)`

`;

export const ShareIcon  = styled(Share)` 

`;

export const MoreIcon  = styled(MoreHorizontalOutline)`

`;

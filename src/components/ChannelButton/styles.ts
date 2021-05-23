import styled from 'styled-components';
import { Hashtag } from 'styled-icons/heroicons-outline';
import { PersonAdd, Settings } from 'styled-icons/material';
import { Megaphone } from 'styled-icons/boxicons-solid';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    cursor: pointer;

    margin-left: 10px;
    padding: 5px;

    border-radius: 5px;

    background-color: transparent;

    transition: background-color .2s;

    > div {
        display: flex;
        align-items: center;
    }

    > div span {
        margin-left: 5px;
        color: var(--senary);
    }

    > div.channel-button-properties {
        display: none;
    }

    &:hover, &.active {
        background-color: var(--quinary);

        > div span {
            color: var(--white);
        }

        > div.channel-button-properties {
            display: inline;
        }
    }

    &+div {
        margin-top: 2px;
    }
`;

export const HashtagIcon = styled(Hashtag)`
    width: 20px;
    height: 20px;

    color: var(--symbol);
`;

export const MegaphoneIcon = styled(Megaphone)`
    width: 18px;
    height: 18px;

    color: var(--symbol);
`;

export const InviteIcon = styled(PersonAdd)`
    width: 16px;
    height: 16px;

    color: var(--symbol);
    cursor: pointer;

    transition: color .2s;

    &:hover {
        color: var(--white);
    }
`;

export const SettingsIcon = styled(Settings)`
    width: 16px;
    height: 16px;

    margin-left: 4px;

    color: var(--symbol);
    cursor: pointer;

    transition: color .2s;

    &:hover {
        color: var(--white);
    }
`;
